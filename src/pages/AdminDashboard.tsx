import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  MessageSquare, 
  Users, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  Mail,
  Phone,
  Trash2,
  Eye,
  LogOut,
  LayoutDashboard,
  CalendarDays,
  Inbox,
  Settings,
  TrendingUp,
  RefreshCw
} from "lucide-react";
import { useAppointments, useUpdateAppointmentStatus } from "@/hooks/use-appointments";
import { useContactMessages, useMarkMessageAsRead, useDeleteContactMessage } from "@/hooks/use-contact";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("overview");
  const { toast } = useToast();
  
  // Hooks
  const { data: appointments = [], isLoading: appointmentsLoading, refetch: refetchAppointments } = useAppointments();
  const { data: messages = [], isLoading: messagesLoading, refetch: refetchMessages } = useContactMessages();
  const updateStatus = useUpdateAppointmentStatus();
  const markAsRead = useMarkMessageAsRead();
  const deleteMessage = useDeleteContactMessage();

  // Simple password check (replace with proper auth in production)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") { // Change this password!
      setIsAuthenticated(true);
      toast({ title: "Welcome!", description: "Logged in successfully." });
    } else {
      toast({ title: "Error", description: "Invalid password.", variant: "destructive" });
    }
  };

  const handleStatusChange = async (id: string, status: 'pending' | 'confirmed' | 'cancelled' | 'completed') => {
    try {
      await updateStatus.mutateAsync({ id, status });
      toast({ title: "Updated", description: `Appointment ${status}.` });
    } catch (error) {
      toast({ title: "Error", description: "Failed to update status.", variant: "destructive" });
    }
  };

  const handleMarkAsRead = async (id: string) => {
    try {
      await markAsRead.mutateAsync(id);
    } catch (error) {
      toast({ title: "Error", description: "Failed to mark as read.", variant: "destructive" });
    }
  };

  const handleDeleteMessage = async (id: string) => {
    try {
      await deleteMessage.mutateAsync(id);
      toast({ title: "Deleted", description: "Message deleted." });
    } catch (error) {
      toast({ title: "Error", description: "Failed to delete message.", variant: "destructive" });
    }
  };

  // Stats
  const stats = {
    totalAppointments: appointments.length,
    pendingAppointments: appointments.filter(a => a.status === 'pending').length,
    confirmedAppointments: appointments.filter(a => a.status === 'confirmed').length,
    todayAppointments: appointments.filter(a => a.appointment_date === format(new Date(), 'yyyy-MM-dd')).length,
    unreadMessages: messages.filter(m => !m.is_read).length,
    totalMessages: messages.length,
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-slate-700 bg-slate-800/50 backdrop-blur-xl">
          <CardHeader className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mx-auto flex items-center justify-center mb-4">
              <LayoutDashboard className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl text-white">Admin Dashboard</CardTitle>
            <CardDescription className="text-slate-400">Al-Bader Dental Clinic</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
              />
              <Button type="submit" className="w-full h-12" size="lg">
                Login to Dashboard
              </Button>
              <Link to="/" className="block">
                <Button variant="ghost" className="w-full text-slate-400 hover:text-white">
                  Back to Website
                </Button>
              </Link>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-slate-800/50 backdrop-blur-xl border-r border-slate-700 p-6 hidden lg:block">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-white font-bold">AB</span>
          </div>
          <div>
            <h2 className="font-semibold text-white">Al-Bader</h2>
            <p className="text-xs text-slate-400">Admin Panel</p>
          </div>
        </div>

        <nav className="space-y-2">
          {[
            { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
            { id: 'appointments', icon: CalendarDays, label: 'Appointments' },
            { id: 'messages', icon: Inbox, label: 'Messages' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                activeTab === item.id
                  ? "bg-primary text-white"
                  : "text-slate-400 hover:text-white hover:bg-slate-700/50"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
              {item.id === 'appointments' && stats.pendingAppointments > 0 && (
                <Badge className="ml-auto bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                  {stats.pendingAppointments}
                </Badge>
              )}
              {item.id === 'messages' && stats.unreadMessages > 0 && (
                <Badge className="ml-auto bg-red-500/20 text-red-400 border-red-500/30">
                  {stats.unreadMessages}
                </Badge>
              )}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-6 left-6 right-6 space-y-2">
          <Link to="/">
            <Button variant="ghost" className="w-full justify-start text-slate-400 hover:text-white">
              <Eye className="w-4 h-4 mr-2" />
              View Website
            </Button>
          </Link>
          <Button 
            variant="ghost" 
            className="w-full justify-start text-slate-400 hover:text-white"
            onClick={() => setIsAuthenticated(false)}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 p-6 lg:p-8">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold">AB</span>
            </div>
            <h2 className="font-semibold text-white">Admin</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsAuthenticated(false)}>
            <LogOut className="w-5 h-5 text-slate-400" />
          </Button>
        </div>

        {/* Mobile Tabs */}
        <div className="lg:hidden mb-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full bg-slate-800/50">
              <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
              <TabsTrigger value="appointments" className="flex-1">Appointments</TabsTrigger>
              <TabsTrigger value="messages" className="flex-1">Messages</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-white">
              {activeTab === 'overview' && 'Dashboard Overview'}
              {activeTab === 'appointments' && 'Appointments'}
              {activeTab === 'messages' && 'Messages'}
            </h1>
            <p className="text-slate-400 mt-1">
              {format(new Date(), 'EEEE, MMMM d, yyyy')}
            </p>
          </div>
          <Button 
            variant="outline" 
            className="border-slate-600 text-slate-300 hover:bg-slate-700"
            onClick={() => {
              refetchAppointments();
              refetchMessages();
            }}
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Today's Appointments</p>
                      <p className="text-3xl font-bold text-white mt-1">{stats.todayAppointments}</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Pending</p>
                      <p className="text-3xl font-bold text-yellow-400 mt-1">{stats.pendingAppointments}</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-yellow-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Confirmed</p>
                      <p className="text-3xl font-bold text-green-400 mt-1">{stats.confirmedAppointments}</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Unread Messages</p>
                      <p className="text-3xl font-bold text-red-400 mt-1">{stats.unreadMessages}</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-red-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Appointments */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <CalendarDays className="w-5 h-5 text-primary" />
                    Recent Appointments
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {appointmentsLoading ? (
                    <p className="text-slate-400">Loading...</p>
                  ) : appointments.length === 0 ? (
                    <p className="text-slate-400">No appointments yet</p>
                  ) : (
                    appointments.slice(0, 5).map((apt) => (
                      <div key={apt.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30">
                        <div>
                          <p className="font-medium text-white">{apt.patient_name}</p>
                          <p className="text-sm text-slate-400">
                            {format(new Date(apt.appointment_date), 'MMM d')} at {apt.appointment_time}
                          </p>
                        </div>
                        <Badge 
                          className={cn(
                            apt.status === 'pending' && 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
                            apt.status === 'confirmed' && 'bg-green-500/20 text-green-400 border-green-500/30',
                            apt.status === 'cancelled' && 'bg-red-500/20 text-red-400 border-red-500/30',
                            apt.status === 'completed' && 'bg-blue-500/20 text-blue-400 border-blue-500/30',
                          )}
                        >
                          {apt.status}
                        </Badge>
                      </div>
                    ))
                  )}
                </CardContent>
              </Card>

              {/* Recent Messages */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Inbox className="w-5 h-5 text-primary" />
                    Recent Messages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {messagesLoading ? (
                    <p className="text-slate-400">Loading...</p>
                  ) : messages.length === 0 ? (
                    <p className="text-slate-400">No messages yet</p>
                  ) : (
                    messages.slice(0, 5).map((msg) => (
                      <div key={msg.id} className="flex items-start gap-3 p-3 rounded-lg bg-slate-700/30">
                        <div className={cn(
                          "w-2 h-2 rounded-full mt-2",
                          msg.is_read ? "bg-slate-500" : "bg-red-400"
                        )} />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-white truncate">{msg.name}</p>
                          <p className="text-sm text-slate-400 truncate">{msg.subject || msg.message}</p>
                        </div>
                      </div>
                    ))
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Appointments Tab */}
        {activeTab === 'appointments' && (
          <div className="space-y-4">
            {appointmentsLoading ? (
              <Card className="bg-slate-800/50 border-slate-700 p-8 text-center">
                <p className="text-slate-400">Loading appointments...</p>
              </Card>
            ) : appointments.length === 0 ? (
              <Card className="bg-slate-800/50 border-slate-700 p-8 text-center">
                <Calendar className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <p className="text-slate-400">No appointments yet</p>
              </Card>
            ) : (
              appointments.map((apt) => (
                <Card key={apt.id} className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white text-lg">{apt.patient_name}</h3>
                          <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-400">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {format(new Date(apt.appointment_date), 'MMMM d, yyyy')}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {apt.appointment_time}
                            </span>
                            <span className="flex items-center gap-1">
                              <Phone className="w-4 h-4" />
                              {apt.phone}
                            </span>
                            {apt.email && (
                              <span className="flex items-center gap-1">
                                <Mail className="w-4 h-4" />
                                {apt.email}
                              </span>
                            )}
                          </div>
                          {apt.message && (
                            <p className="mt-2 text-sm text-slate-300 bg-slate-700/30 p-2 rounded">
                              {apt.message}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <Badge 
                          className={cn(
                            "px-3 py-1",
                            apt.status === 'pending' && 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
                            apt.status === 'confirmed' && 'bg-green-500/20 text-green-400 border-green-500/30',
                            apt.status === 'cancelled' && 'bg-red-500/20 text-red-400 border-red-500/30',
                            apt.status === 'completed' && 'bg-blue-500/20 text-blue-400 border-blue-500/30',
                          )}
                        >
                          {apt.status}
                        </Badge>
                        {apt.status === 'pending' && (
                          <>
                            <Button 
                              size="sm" 
                              className="bg-green-600 hover:bg-green-700"
                              onClick={() => handleStatusChange(apt.id, 'confirmed')}
                            >
                              <CheckCircle className="w-4 h-4" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="destructive"
                              onClick={() => handleStatusChange(apt.id, 'cancelled')}
                            >
                              <XCircle className="w-4 h-4" />
                            </Button>
                          </>
                        )}
                        {apt.status === 'confirmed' && (
                          <Button 
                            size="sm" 
                            className="bg-blue-600 hover:bg-blue-700"
                            onClick={() => handleStatusChange(apt.id, 'completed')}
                          >
                            Complete
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        )}

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <div className="space-y-4">
            {messagesLoading ? (
              <Card className="bg-slate-800/50 border-slate-700 p-8 text-center">
                <p className="text-slate-400">Loading messages...</p>
              </Card>
            ) : messages.length === 0 ? (
              <Card className="bg-slate-800/50 border-slate-700 p-8 text-center">
                <Inbox className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <p className="text-slate-400">No messages yet</p>
              </Card>
            ) : (
              messages.map((msg) => (
                <Card 
                  key={msg.id} 
                  className={cn(
                    "bg-slate-800/50 border-slate-700 transition-all",
                    !msg.is_read && "border-l-4 border-l-primary"
                  )}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                          msg.is_read ? "bg-slate-700" : "bg-primary/20"
                        )}>
                          <Mail className={cn("w-6 h-6", msg.is_read ? "text-slate-400" : "text-primary")} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-semibold text-white">{msg.name}</h3>
                            {!msg.is_read && (
                              <Badge className="bg-primary/20 text-primary border-primary/30">New</Badge>
                            )}
                          </div>
                          <p className="text-sm text-slate-400">{msg.email}</p>
                          {msg.subject && (
                            <p className="font-medium text-slate-300 mt-2">{msg.subject}</p>
                          )}
                          <p className="text-slate-300 mt-2">{msg.message}</p>
                          <p className="text-xs text-slate-500 mt-3">
                            {format(new Date(msg.created_at), 'MMM d, yyyy at h:mm a')}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {!msg.is_read && (
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="border-slate-600 text-slate-300 hover:bg-slate-700"
                            onClick={() => handleMarkAsRead(msg.id)}
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            Mark Read
                          </Button>
                        )}
                        <Button 
                          size="sm" 
                          variant="destructive"
                          onClick={() => handleDeleteMessage(msg.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;

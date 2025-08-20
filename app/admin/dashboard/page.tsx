'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { 
  Package, 
  Clock, 
  CheckCircle, 
  Truck, 
  Calendar,
  DollarSign,
  TrendingUp,
  Star,
  Plus,
  Eye,
  MapPin,
  AlertCircle
} from 'lucide-react';

const stats = [
  {
    title: 'Total Orders',
    value: '24',
    change: '+12%',
    icon: Package,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    title: 'In Progress',
    value: '3',
    change: '+2',
    icon: Clock,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100'
  },
  {
    title: 'Completed',
    value: '21',
    change: '+8%',
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    title: 'Total Spent',
    value: '$486',
    change: '+15%',
    icon: DollarSign,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  }
];

const recentOrders = [
  {
    id: 'ORD-001',
    service: 'Wash & Fold',
    status: 'In Progress',
    date: '2024-01-15',
    amount: '$24.50',
    items: 8,
    statusColor: 'bg-yellow-100 text-yellow-800',
    address: '123 Main St, Apt 4B'
  },
  {
    id: 'ORD-002',
    service: 'Dry Cleaning',
    status: 'Ready for Pickup',
    date: '2024-01-14',
    amount: '$45.99',
    items: 3,
    statusColor: 'bg-blue-100 text-blue-800',
    address: '123 Main St, Apt 4B'
  },
  {
    id: 'ORD-003',
    service: 'Express Service',
    status: 'Completed',
    date: '2024-01-13',
    amount: '$32.75',
    items: 5,
    statusColor: 'bg-green-100 text-green-800',
    address: '123 Main St, Apt 4B'
  }
];

const upcomingSchedule = [
  {
    id: 1,
    type: 'Pickup',
    date: '2024-01-16',
    time: '10:00 AM - 12:00 PM',
    service: 'Wash & Fold',
    address: '123 Main St, Apt 4B',
    status: 'Confirmed'
  },
  {
    id: 2,
    type: 'Delivery',
    date: '2024-01-18',
    time: '2:00 PM - 4:00 PM',
    service: 'Dry Cleaning',
    address: '123 Main St, Apt 4B',
    status: 'Scheduled'
  }
];

const notifications = [
  {
    id: 1,
    type: 'success',
    title: 'Order Completed',
    message: 'Your dry cleaning order ORD-003 is ready for pickup',
    time: '2 hours ago'
  },
  {
    id: 2,
    type: 'info',
    title: 'Pickup Reminder',
    message: 'Scheduled pickup tomorrow at 10:00 AM',
    time: '1 day ago'
  },
  {
    id: 3,
    type: 'warning',
    title: 'Payment Due',
    message: 'Invoice INV-002 payment is due in 3 days',
    time: '2 days ago'
  }
];

export default function DashboardPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 md:p-8 text-white"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
            <p className="text-blue-100 text-lg">
              You have 3 orders in progress and 1 pickup scheduled for tomorrow.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              <Plus className="h-4 w-4 mr-2" />
              Schedule New Pickup
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600 flex items-center gap-1 mt-1">
                      <TrendingUp className="h-3 w-3" />
                      {stat.change}
                    </p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Recent Orders
                </CardTitle>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-gray-900">{order.id}</span>
                        <Badge className={order.statusColor}>{order.status}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{order.service} • {order.items} items</p>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {order.address}
                      </p>
                      <p className="text-xs text-gray-500">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900 mb-2">{order.amount}</p>
                      <Button variant="outline" size="sm">
                        <Eye className="h-3 w-3 mr-1" />
                        View
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Upcoming Schedule */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingSchedule.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="p-4 bg-blue-50 rounded-lg border border-blue-100"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-blue-900">{item.type}</span>
                      <Badge variant="outline" className="text-xs">
                        {item.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-700 mb-1">{item.service}</p>
                    <p className="text-xs text-gray-600 mb-1">{item.date} • {item.time}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {item.address}
                    </p>
                  </motion.div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Schedule Pickup
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Recent Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {notifications.map((notification, index) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className={`p-1 rounded-full ${
                      notification.type === 'success' ? 'bg-green-100' :
                      notification.type === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        notification.type === 'success' ? 'bg-green-500' :
                        notification.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`}></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">{notification.title}</h4>
                      <p className="text-xs text-gray-600 mb-1">{notification.message}</p>
                      <p className="text-xs text-gray-500">{notification.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button className="h-20 flex-col gap-2 bg-blue-600 hover:bg-blue-700">
                  <Package className="h-6 w-6" />
                  <span className="text-sm">New Order</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <Truck className="h-6 w-6" />
                  <span className="text-sm">Track Order</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <Calendar className="h-6 w-6" />
                  <span className="text-sm">Schedule</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <Star className="h-6 w-6" />
                  <span className="text-sm">Rate Service</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Service Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Monthly Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <h3 className="text-2xl font-bold text-blue-600">24</h3>
                <p className="text-gray-600">Total Orders</p>
                <p className="text-sm text-green-600">+12% from last month</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-600">$486.75</h3>
                <p className="text-gray-600">Total Spent</p>
                <p className="text-sm text-green-600">+15% from last month</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple-600">$20.28</h3>
                <p className="text-gray-600">Average Order</p>
                <p className="text-sm text-gray-500">Consistent spending</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-600">4.9</h3>
                <p className="text-gray-600">Satisfaction Rating</p>
                <p className="text-sm text-green-600">Excellent service</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
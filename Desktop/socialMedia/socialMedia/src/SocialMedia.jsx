import React, { useState } from "react";
import { Paper, Box, Typography, Grid, Select, MenuItem } from "@mui/material";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ComposedChart,
  Area,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  TrendingUp,
  Users,
  Share2,
  MessageCircle,
  Clock,
  Target,
  Award,
} from "lucide-react";

const mockData = {
  performance: [
    { type: "Carousel", engagement: 80, reach: 65, retention: 75 },
    { type: "Reels", engagement: 95, reach: 90, retention: 85 },
    { type: "Static", engagement: 60, reach: 50, retention: 55 },
  ],
  trending: [
    { month: "Jan", reels: 800, carousel: 600, static: 400, total: 2000 },
    { month: "Feb", reels: 1000, carousel: 750, static: 450, total: 2500 },
    { month: "Mar", reels: 1200, carousel: 900, static: 500, total: 3000 },
  ],
  distribution: [
    { name: "Reels", value: 45, growth: "+15%" },
    { name: "Carousel", value: 35, growth: "+10%" },
    { name: "Static", value: 20, growth: "+5%" },
  ],
  metrics: [
    { title: "Total Views", value: "125.4K", change: "+12%", icon: Users },
    { title: "Avg. Watch Time", value: "2.5m", change: "+8%", icon: Clock },
    {
      title: "Engagement Rate",
      value: "4.8%",
      change: "+15%",
      icon: TrendingUp,
    },
    { title: "Reach", value: "89.2K", change: "+20%", icon: Target },
  ],
  insights: [
    {
      title: "Top Performing Format",
      content: "Reels are driving 45% of total engagement",
      icon: Award,
    },
    {
      title: "Peak Posting Time",
      content: "Highest engagement at 6-8 PM EST",
      icon: Clock,
    },
    {
      title: "Content Length",
      content: "60-90 second videos perform best",
      icon: Target,
    },
  ],
  detailedStats: {
    reels: { views: "45K", shares: "2.8K", saves: "1.2K", comments: "890" },
    carousel: { views: "35K", shares: "1.9K", saves: "950", comments: "720" },
    static: { views: "25K", shares: "1.1K", saves: "580", comments: "430" },
  },
};

const COLORS = ["#3b82f6", "#8b5cf6", "#ec4899"];

const Dashboard = () => {
  const [selectedFormat, setSelectedFormat] = useState("reels");

  return (
    // <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
    //   <div className="max-w-7xl mx-auto space-y-6">
    //     <div className="flex justify-between items-center">
    //       <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
    //         Content Performance Analytics
    //       </h1>
    //       <div className="flex space-x-4">
    //         <select className="px-4 py-2 rounded-lg border bg-white">
    //           <option>Last 7 days</option>
    //           <option>Last 30 days</option>
    //           <option>Last 90 days</option>
    //         </select>
    //       </div>
    //     </div>

    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    //       {mockData.metrics.map((metric, index) => (
    //         <Card key={index} className="hover:shadow-lg transition-all duration-300">
    //           <CardContent className="p-4">
    //             <div className="flex justify-between items-center">
    //               <div>
    //                 <p className="text-sm text-gray-500">{metric.title}</p>
    //                 <p className="text-2xl font-bold mt-1">{metric.value}</p>
    //                 <span className={`text-sm ${metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
    //                   {metric.change}
    //                 </span>
    //               </div>
    //               <div className="p-3 bg-blue-50 rounded-lg">
    //                 <metric.icon className="w-6 h-6 text-blue-600" />
    //               </div>
    //             </div>
    //           </CardContent>
    //         </Card>
    //       ))}
    //     </div>

    //     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    //       <Card className="hover:shadow-xl transition-all duration-300">
    //         <CardHeader>
    //           <CardTitle>Performance Radar</CardTitle>
    //         </CardHeader>
    //         <CardContent>
    //           <RadarChart width={300} height={300} data={mockData.performance}>
    //             <PolarGrid stroke="#e2e8f0" />
    //             <PolarAngleAxis dataKey="type" />
    //             <PolarRadiusAxis angle={30} domain={[0, 100]} />
    //             <Radar
    //               name="Engagement"
    //               dataKey="engagement"
    //               stroke="#3b82f6"
    //               fill="#3b82f6"
    //               fillOpacity={0.5}
    //             />
    //             <Radar
    //               name="Reach"
    //               dataKey="reach"
    //               stroke="#8b5cf6"
    //               fill="#8b5cf6"
    //               fillOpacity={0.5}
    //             />
    //             <Tooltip />
    //           </RadarChart>
    //         </CardContent>
    //       </Card>

    //       <Card className="hover:shadow-xl transition-all duration-300">
    //         <CardHeader>
    //           <CardTitle>Growth Trends</CardTitle>
    //         </CardHeader>
    //         <CardContent>
    //           <ComposedChart width={400} height={300} data={mockData.trending}>
    //             <CartesianGrid stroke="#f5f5f5" />
    //             <XAxis dataKey="month" />
    //             <YAxis />
    //             <Tooltip />
    //             <Area
    //               type="monotone"
    //               dataKey="total"
    //               fill="#8b5cf6"
    //               stroke="#8b5cf6"
    //               fillOpacity={0.2}
    //             />
    //             <Bar dataKey="reels" fill="#3b82f6" />
    //             <Line type="monotone" dataKey="carousel" stroke="#ec4899" />
    //           </ComposedChart>
    //         </CardContent>
    //       </Card>

    //       <Card className="hover:shadow-xl transition-all duration-300">
    //         <CardHeader>
    //           <CardTitle>Content Distribution</CardTitle>
    //         </CardHeader>
    //         <CardContent>
    //           <PieChart width={300} height={300}>
    //             <Pie
    //               data={mockData.distribution}
    //               cx={150}
    //               cy={150}
    //               innerRadius={60}
    //               outerRadius={80}
    //               fill="#8884d8"
    //               paddingAngle={5}
    //               dataKey="value"
    //             >
    //               {mockData.distribution.map((entry, index) => (
    //                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    //               ))}
    //             </Pie>
    //             <Tooltip />
    //           </PieChart>
    //           <div className="mt-4 space-y-2">
    //             {mockData.distribution.map((item, index) => (
    //               <div key={index} className="flex justify-between items-center">
    //                 <span className="flex items-center">
    //                   <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index] }}></div>
    //                   {item.name}
    //                 </span>
    //                 <span className="text-green-500">{item.growth}</span>
    //               </div>
    //             ))}
    //           </div>
    //         </CardContent>
    //       </Card>
    //     </div>

    //     <div className="grid md:grid-cols-2 gap-6">
    //       <Card className="hover:shadow-xl transition-all duration-300">
    //         <CardHeader>
    //           <CardTitle>Content Performance Details</CardTitle>
    //         </CardHeader>
    //         <CardContent>
    //           <div className="space-x-2 mb-4">
    //             {Object.keys(mockData.detailedStats).map((format) => (
    //               <button
    //                 key={format}
    //                 onClick={() => setSelectedFormat(format)}
    //                 className={`px-4 py-2 rounded-lg capitalize ${
    //                   selectedFormat === format
    //                     ? 'bg-blue-600 text-white'
    //                     : 'bg-gray-100 hover:bg-gray-200'
    //                 }`}
    //               >
    //                 {format}
    //               </button>
    //             ))}
    //           </div>
    //           <div className="grid grid-cols-2 gap-4">
    //             {Object.entries(mockData.detailedStats[selectedFormat]).map(([key, value]) => (
    //               <div key={key} className="bg-gray-50 p-4 rounded-lg">
    //                 <p className="text-sm text-gray-500 capitalize">{key}</p>
    //                 <p className="text-xl font-bold mt-1">{value}</p>
    //               </div>
    //             ))}
    //           </div>
    //         </CardContent>
    //       </Card>

    //       <Card className="hover:shadow-xl transition-all duration-300">
    //         <CardHeader>
    //           <CardTitle>Key Insights</CardTitle>
    //         </CardHeader>
    //         <CardContent>
    //           <div className="space-y-4">
    //             {mockData.insights.map((insight, index) => (
    //               <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
    //                 <div className="p-2 bg-white rounded-lg">
    //                   <insight.icon className="w-5 h-5 text-blue-600" />
    //                 </div>
    //                 <div>
    //                   <h3 className="font-semibold">{insight.title}</h3>
    //                   <p className="text-sm text-gray-600">{insight.content}</p>
    //                 </div>
    //               </div>
    //             ))}
    //           </div>
    //         </CardContent>
    //       </Card>
    //     </div>
    //   </div>
    // </div>

    <Box>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Content Performance Analytics
          </Typography>
          <Select defaultValue={7} size="small" sx={{ bgcolor: "white" }}>
            <MenuItem value={7}>Last 7 days</MenuItem>
            <MenuItem value={30}>Last 30 days</MenuItem>
            <MenuItem value={90}>Last 90 days</MenuItem>
          </Select>
        </Box>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          {mockData.metrics.map((metric, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  "&:hover": { boxShadow: 3, transition: "box-shadow 0.3s" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography color="text.secondary" variant="body2">
                      {metric.title}
                    </Typography>
                    <Typography variant="h5" sx={{ my: 1, fontWeight: "bold" }}>
                      {metric.value}
                    </Typography>
                    <Typography
                      color={
                        metric.change.startsWith("+")
                          ? "success.main"
                          : "error.main"
                      }
                      variant="body2"
                    >
                      {metric.change}
                    </Typography>
                  </Box>
                  <Box sx={{ p: 1.5, bgcolor: "#f0f9ff", borderRadius: 2 }}>
                    <metric.icon size={24} color="#3b82f6" />
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6  }>
            <Paper
              elevation={1}
              sx={{
                p: 3,
                "&:hover": { boxShadow: 3, transition: "box-shadow 0.3s" },
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                Performance Radar
              </Typography>
              <RadarChart width={300} height={300} data={mockData.performance}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="type" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                  name="Engagement"
                  dataKey="engagement"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.5}
                />
                <Radar
                  name="Reach"
                  dataKey="reach"
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.5}
                />
                <Tooltip />
              </RadarChart>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={1}
              sx={{
                p: 3,
                "&:hover": { boxShadow: 3, transition: "box-shadow 0.3s" },
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                Performance Radar
              </Typography>
              <PieChart width={300} height={300}>
                <Pie
                  data={mockData.distribution}
                  cx={150}
                  cy={150}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {mockData.distribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>

              <div className="mt-4 space-y-2">
                {mockData.distribution.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index] }}></div>
                      {item.name}
                    </span>
                    <span className="text-green-500">{item.growth}</span>
                  </div>
                ))}
              </div>
            </Paper>
          </Grid>

          {/* [Rest of the charts and components follow the same pattern using Paper, Box, Typography] */}
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;

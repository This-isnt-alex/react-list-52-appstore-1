import { Search, Menu, Star, Download, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

// Types
interface App {
  name: string;
  icon: string;
  rating: number;
  category: string;
}

interface FeaturedApp extends App {
  background: string;
}

// Mock data for apps
const featuredApp: FeaturedApp = {
  name: "Top Drives - Car Race Battles",
  icon: "https://ext.same-assets.com/3142025731/1819055773.webp",
  background: "https://ext.same-assets.com/3142025731/900350695.jpeg",
  rating: 8.5,
  category: "Racing"
};

const popularGames: App[] = [
  { name: "Free Fire", icon: "https://ext.same-assets.com/3142025731/419480009.webp", rating: 8.6, category: "Action" },
  { name: "Roblox", icon: "https://ext.same-assets.com/3142025731/2926202223.webp", rating: 8.1, category: "Adventure" },
  { name: "Brawl Stars", icon: "https://ext.same-assets.com/3142025731/1979648560.webp", rating: 7.9, category: "Action" },
  { name: "Dream Cricket 2025", icon: "https://ext.same-assets.com/3142025731/1973621712.webp", rating: 8.7, category: "Sports" },
  { name: "eFootball 2025", icon: "https://ext.same-assets.com/3142025731/3836116504.webp", rating: 8.6, category: "Sports" },
  { name: "Car Parking Multiplayer", icon: "https://ext.same-assets.com/3142025731/739445439.webp", rating: 8.5, category: "Simulation" }
];

const popularApps: App[] = [
  { name: "CapCut", icon: "https://ext.same-assets.com/3142025731/2069538394.webp", rating: 8.2, category: "Video" },
  { name: "TikTok", icon: "https://ext.same-assets.com/3142025731/170824132.webp", rating: 8.2, category: "Entertainment" },
  { name: "WhatsApp", icon: "https://ext.same-assets.com/3142025731/4057444231.webp", rating: 7.8, category: "Communication" },
  { name: "YouTube", icon: "https://ext.same-assets.com/3142025731/440172037.webp", rating: 7.7, category: "Entertainment" },
  { name: "Instagram", icon: "https://ext.same-assets.com/3142025731/2347243897.webp", rating: 6.5, category: "Social" },
  { name: "Netflix", icon: "https://ext.same-assets.com/3142025731/3809475157.webp", rating: 7.2, category: "Entertainment" }
];

const trendingSearches = ["gta san andreas", "movie box", "nba", "bilibili", "fortnite", "google play store", "call of duty", "summertime saga"];

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                APK
              </div>
              <span className="ml-2 text-xl font-semibold text-gray-800">pure</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/games" className="text-gray-700 hover:text-green-500 font-medium">Games</a>
            <a href="/apps" className="text-gray-700 hover:text-green-500 font-medium">Apps</a>
            <a href="/articles" className="text-gray-700 hover:text-green-500 font-medium">Articles</a>
            <a href="/products" className="text-gray-700 hover:text-green-500 font-medium">Products</a>
            <a href="/aipure" className="text-gray-700 hover:text-green-500 font-medium">AIPURE</a>
          </nav>

          {/* Search and Login */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search apps & games..."
                className="pl-10 w-64 hidden sm:block"
              />
            </div>
            <Button variant="outline" className="hidden sm:inline-flex">
              Log In
            </Button>
            <Button className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={featuredApp.background}
          alt="Hero background"
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center space-x-6">
          <img
            src={featuredApp.icon}
            alt={featuredApp.name}
            className="w-20 h-20 rounded-2xl border-4 border-white/20"
          />
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{featuredApp.name}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <Badge variant="secondary" className="bg-white/20 text-white">
                {featuredApp.category}
              </Badge>
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="font-semibold">{featuredApp.rating}</span>
              </div>
            </div>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppCard({ app }: { app: App }) {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
      <CardContent className="p-4">
        <div className="flex items-center space-x-3">
          <img
            src={app.icon}
            alt={app.name}
            className="w-12 h-12 rounded-xl"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm text-gray-900 truncate">{app.name}</h3>
            <p className="text-xs text-gray-600">{app.category}</p>
            <div className="flex items-center mt-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-xs font-medium">{app.rating}</span>
            </div>
          </div>
          <Button size="sm" className="bg-green-500 hover:bg-green-600 text-xs">
            Download
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function TrendingSearches() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-gray-50">
      <div className="flex items-center mb-4">
        <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
        <h2 className="text-lg font-semibold text-gray-900">Trending Searches</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {trendingSearches.map((search) => (
          <Badge key={search} variant="outline" className="cursor-pointer hover:bg-green-50">
            {search}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function AppSection({ title, apps }: { title: string; apps: App[] }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <Button variant="ghost" className="text-green-500 hover:text-green-600">
          View All →
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {apps.map((app) => (
          <AppCard key={app.name} app={app} />
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                APK
              </div>
              <span className="ml-2 text-xl font-semibold">pure</span>
            </div>
            <p className="text-gray-400 text-sm">
              APKPure - A multi-platform app store primarily focused on Android, providing extensive app-related content.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Service</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/apk-install" className="hover:text-white">APK Install</a></li>
              <li><a href="/signature-verification" className="hover:text-white">APK Signature Verification</a></li>
              <li><a href="/download-service" className="hover:text-white">APK Download Service</a></li>
              <li><a href="/premium" className="hover:text-white">APKPure Premium</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Developers</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/developer-console" className="hover:text-white">Developer Console</a></li>
              <li><a href="/website-builder" className="hover:text-white">APK Website Builder</a></li>
              <li><a href="/submit-apk" className="hover:text-white">Submit APK</a></li>
              <li><a href="/monetization" className="hover:text-white">Traffic Monetization</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
              <li><a href="/business" className="hover:text-white">Business Cooperation</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>Copyright © 2014-2025 APKPure All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/copyright" className="hover:text-white">Copyright Policy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TrendingSearches />
      <AppSection title="Popular Games in Last 24 Hours" apps={popularGames} />
      <AppSection title="Popular Apps in Last 24 Hours" apps={popularApps} />
      <Footer />
    </div>
  );
}

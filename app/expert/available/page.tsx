import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Search, Filter, ArrowUpDown, Clock, DollarSign, BookOpen } from 'lucide-react';

export default function ExpertAvailablePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Available Assignments</h2>
          <p className="text-gray-500 text-sm">Find and claim assignments that match your expertise</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search assignments..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>
          <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Filters Sidebar */}
        <div className="space-y-4">
          <Card className="border border-gray-200">
            <CardHeader className="border-b border-gray-100">
              <CardTitle className="text-lg font-semibold">Filters</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Subject</h4>
                <select className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent">
                  <option>All Subjects</option>
                  <option>Mathematics</option>
                  <option>Physics</option>
                  <option>Computer Science</option>
                  <option>Engineering</option>
                </select>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Assignment Type</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
                    <span className="ml-2 text-sm text-gray-600">Problem Sets</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
                    <span className="ml-2 text-sm text-gray-600">Essays</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
                    <span className="ml-2 text-sm text-gray-600">Research Papers</span>
                  </label>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Budget Range</h4>
                <div className="space-y-2">
                  <input 
                    type="range" 
                    min="0" 
                    max="1000" 
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>$0</span>
                    <span>$500</span>
                    <span>$1000+</span>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-gray-900 hover:bg-gray-800">Apply Filters</Button>
            </CardContent>
          </Card>
        </div>

        {/* Assignments List */}
        <div className="md:col-span-2 space-y-4">
          {/* Sort Controls */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Showing 12 available assignments</p>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select className="text-sm border-0 focus:ring-0 focus:ring-offset-0">
                <option>Newest First</option>
                <option>Highest Paying</option>
                <option>Earliest Deadline</option>
              </select>
            </div>
          </div>

          {/* Assignment Cards */}
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <Card key={item} className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-gray-900">Advanced Calculus Problem Set</h3>
                        <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">
                          Mathematics
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">10 problems covering limits, derivatives, and integrals</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600">
                          <Clock className="mr-1 h-3 w-3" />
                          Due in 3 days
                        </span>
                        <span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700">
                          <DollarSign className="mr-1 h-3 w-3" />
                          $120 - $180
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row md:flex-col gap-2">
                      <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                        View Details
                      </Button>
                      <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50">
                        Save for Later
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between pt-4">
            <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50">
              Previous
            </Button>
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`flex h-10 w-10 items-center justify-center rounded-md ${
                    page === 1
                      ? 'bg-gray-900 text-white'
                      : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

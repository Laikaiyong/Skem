import React from 'react';
import { AlertTriangle, Shield, Globe, Activity } from 'lucide-react';
import LinkPreview from './linkPreview';

const WebsitePreview = ({ url, analysisData }) => {
  // Mock data - replace with real API data
  const mockAnalysis = {
    trustScore: 78,
    metrics: {
      ssl: true,
      age: '2 years',
      trafficRank: '125,432',
      backlinks: 1250,
      loadTime: '1.2s',
      suspiciousPatterns: 2,
    }
  };

  const analysis = analysisData || mockAnalysis;

  return (
    <div className="space-y-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex items-center gap-2 p-4 border-b">
          <Globe className="h-5 w-5" />
          <h2 className="text-lg font-semibold">Website Preview</h2>
        </div>
        <div className="p-4">
          <div className="aspect-video w-full bg-gray-100 rounded-lg overflow-hidden">
            <LinkPreview url={url} />
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex items-center gap-2 p-4 border-b">
          <Activity className="h-5 w-5" />
          <h2 className="text-lg font-semibold">Trust Analysis</h2>
        </div>
        <div className="p-4 space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Trust Score</span>
              <span className="font-medium">{analysis.trustScore}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded">
              <div
                className="h-full bg-green-600 rounded"
                style={{ width: `${analysis.trustScore}%` }}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <MetricCard
              icon={<Shield className="h-4 w-4" />}
              label="SSL Security"
              value={analysis.metrics.ssl ? "Secure" : "Not Secure"}
              status={analysis.metrics.ssl ? "success" : "warning"}
            />
            <MetricCard
              icon={<AlertTriangle className="h-4 w-4" />}
              label="Suspicious Patterns"
              value={analysis.metrics.suspiciousPatterns}
              status={analysis.metrics.suspiciousPatterns > 3 ? "warning" : "success"}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Domain Age:</span>
              <span className="font-medium">{analysis.metrics.age}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Load Time:</span>
              <span className="font-medium">{analysis.metrics.loadTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Traffic Rank:</span>
              <span className="font-medium">{analysis.metrics.trafficRank}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Backlinks:</span>
              <span className="font-medium">{analysis.metrics.backlinks}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ icon, label, value, status }) => {
  const statusColors = {
    success: "text-green-600",
    warning: "text-yellow-600",
    error: "text-red-600"
  };

  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
      <div className={statusColors[status]}>{icon}</div>
      <div>
        <div className="text-sm text-gray-600">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
};

export default WebsitePreview;
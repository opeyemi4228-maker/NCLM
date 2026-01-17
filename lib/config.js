/**
 * Configuration management for the application
 * Handles missing or empty environment variables gracefully
 */

export const config = {
  // Clerk Authentication (Optional)
  clerk: {
    publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || '',
    secretKey: process.env.CLERK_SECRET_KEY || '',
    isConfigured: !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  },

  // MongoDB (Optional)
  mongodb: {
    uri: process.env.MONGODB_URI || '',
    isConfigured: !!process.env.MONGODB_URI,
  },

  // Inngest (Optional)
  inngest: {
    signingKey: process.env.INNGEST_SIGNING_KEY || '',
    eventKey: process.env.INNGEST_EVENT_KEY || '',
    isConfigured: !!process.env.INNGEST_SIGNING_KEY,
  },

  // Cloudinary (Optional)
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
    apiKey: process.env.CLOUDINARY_API_KEY || '',
    apiSecret: process.env.CLOUDINARY_API_SECRET || '',
    isConfigured: !!process.env.CLOUDINARY_CLOUD_NAME,
  },

  // Currency
  currency: process.env.NEXT_PUBLIC_CURRENCY || '$',
};

/**
 * Check if required services are properly configured
 */
export const validateConfig = () => {
  const warnings = [];
  
  if (!config.clerk.isConfigured) {
    warnings.push('⚠️  Clerk authentication is not configured. Auth features will be disabled.');
  }
  
  if (!config.mongodb.isConfigured) {
    warnings.push('⚠️  MongoDB is not configured. Database features will be disabled.');
  }
  
  if (!config.inngest.isConfigured) {
    warnings.push('⚠️  Inngest is not configured. Background jobs will not work.');
  }
  
  if (!config.cloudinary.isConfigured) {
    warnings.push('⚠️  Cloudinary is not configured. Image uploads will be disabled.');
  }

  if (warnings.length > 0 && typeof window === 'undefined') {
    // Only log in server-side
    console.warn('\n=== Configuration Warnings ===');
    warnings.forEach(w => console.warn(w));
    console.warn('==============================\n');
  }

  return warnings;
};

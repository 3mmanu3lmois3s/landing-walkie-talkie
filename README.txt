README - Teethlion Landing Upload Guide

1. Create an S3 Bucket with public access (e.g. teethlion-landing).
2. Enable static website hosting with index.html as entry point.
3. Upload all files inside /landing directly to the root of the bucket.
4. Make files public (or use a Bucket Policy).
5. Access via: http://<bucket-name>.s3-website-<region>.amazonaws.com/

Recommended headers for S3:
- index.html: Cache-Control: no-cache
- .js/.css/.png: Cache-Control: public, max-age=31536000, immutable
- All: Content-Type set correctly per file

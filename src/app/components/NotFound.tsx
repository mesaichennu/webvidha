import { Link } from "react-router";

export function NotFound() {
  return (
    <main className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="mb-4">404</h1>
        <h2 className="mb-6">Page Not Found</h2>
        <p className="mb-8 text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}

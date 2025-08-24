import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apolloClient";
import ErrorBoundary from "@/components/ErrorBoundary";
import * as Sentry from "@sentry/react";

// Initialize Sentry (replace with your DSN from Sentry dashboard)
Sentry.init({
  dsn: "https://f458ca823a07fd0a138593abc5a9e3a2@o4509898079404032.ingest.us.sentry.io/4509898111582208",
  tracesSampleRate: 1.0, // adjust for production
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ErrorBoundary>
  );
}

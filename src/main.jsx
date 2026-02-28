import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./Routes/Router";
import { RouterProvider } from "react-router";
import AuthProvider from "./Context/AuthProvider";
import { MotionConfig } from "motion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <MotionConfig viewport={{ once: true }}>
        <QueryClientProvider client={queryClient}>
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-[60vh]">
                <span className="loading loading-spinner loading-lg text-accent"></span>
              </div>
            }
          >
            <RouterProvider router={router} />
          </Suspense>
        </QueryClientProvider>
      </MotionConfig>
    </AuthProvider>
  </StrictMode>,
);

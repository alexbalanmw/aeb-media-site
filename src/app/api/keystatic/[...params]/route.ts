import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "../../../../../keystatic.config";

const handlers = makeRouteHandler({ config });

// Mirror the admin page guard: outside development, the Keystatic API only
// exists when GitHub mode is configured (auth + repo write access).
const adminEnabled =
  process.env.NODE_ENV === "development" ||
  !!process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO;

const disabled = async () => new Response("Not found", { status: 404 });

export const GET = adminEnabled ? handlers.GET : disabled;
export const POST = adminEnabled ? handlers.POST : disabled;

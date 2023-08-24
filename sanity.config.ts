/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defaultDocumentNode } from "./sanity/desk/defaultDocumentNode";
import { StudioNavbar, defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import Logo from "./components/Logo";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import CustomStudioNavbar from "./components/CustomStudioNavbar";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool({ defaultDocumentNode }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  studio: {
    components: {
      logo: Logo,
      navbar: CustomStudioNavbar,
    },
  },
});

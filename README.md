# Deploying to Netlify

This project is ready for deployment to Netlify. Here are the key points for Netlify configuration:

## Netlify Configuration

- **Build Command:** `npm run build`
- **Publish Directory:** `dist/public`
- **Redirects:**
  - All routes are redirected to `index.html` for client-side routing (see `netlify.toml`).

```
[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

## Build Output
- The build command will generate the production files in `dist/public`.
- Make sure your Vite config outputs to this directory (default is `dist`).

## Notes
- If you use environment variables, set them in the Netlify dashboard.
- If you need server-side code, consider using Netlify Functions or another backend provider, as Netlify only serves static files from the publish directory.

---

**To deploy:**
1. Push your code to your Git provider (GitHub, GitLab, Bitbucket).
2. Connect your repository to Netlify.
3. Set the build command and publish directory as above.
4. Deploy!

---
name: react-dev
description: Develop web application with reactjs and bootstrap css
---

## Workflow
1. Analyze and planning (work break down) from user's requirement and ui mockup
2. Design web react components that follow from best practices and project structure
3. Implement code with reactjs + bootstrap css + typescript
   - Web component
   - State management
4. Check web ui with ui mockup
   - Layout, color and font
   - If not mathch, try to fix and check again until pass
5. Write unit test and ui component test with vitest
   - Run all tests, if test fail, try to fix and run test until pass

## Technology stack
* NodeJS
* ReactJS
* CSS with bootstrap 5.1 https://getbootstrap.com/
* Unit test and ui component test with Vitest https://vitest.dev/
* State management with redux
* Call external rest api vi HTTPs with axios

## Project structure with feature-based and UI component-based organization
```
web01/
   public/
   src/
      app/
         App.tsx
         main.tsx
      components/
         ui/
            Button.tsx
            Button.test.tsx
            Input.tsx
      features/
         auth/
            components/
               LoginForm.tsx
            hooks/
               useAuth.ts
            services/
               authService.ts
            types.ts
            auth.test.ts
         dashboard/
            components/
               DashboardPage.tsx
      assets/
      styles/
         index.css
   index.html
   package.json
   tsconfig.json
   vite.config.ts
```

- Keep reusable, domain-agnostic controls in `components/ui`; keep feature-specific UI, hooks, services, and types together under `features/<feature>`.
- Colocate tests with the component or feature they cover. Add shared test setup only when needed.
- Keep app startup and top-level composition in `app`; avoid adding routing or state-management packages unless the requirements call for them.

## Best practices
* Prefer readable and manintable code, don't write any comment in code
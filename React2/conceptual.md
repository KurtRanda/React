### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
To manage routing in React apps, enabling seamless navigation between views without full-page reloads.

- What is a single page application?
A web app that dynamically updates content without reloading the entire page.

- What are some differences between client side and server side routing?
Client-side: Faster transitions, handles routing in the browser.
Server-side: Full-page reloads, handles routing on the server.

- What are two ways of handling redirects with React Router? When would you use each?
<Navigate> Component: Use in functional components or conditional rendering.
useNavigate Hook: Use programmatically in event handlers.

- What are two different ways to handle page-not-found user experiences using React Router? 
<Route path="*">: Catch-all route for undefined paths.
Custom Components: Create a dedicated 404 component.

- How do you grab URL parameters from within a component using React Router?
Use the useParams hook to access route parameters.

- What is context in React? When would you use it?
A way to share state across components without prop drilling. Use it for global data like themes or authentication

- Describe some differences between class-based components and function
  components in React.
Class-based: Use lifecycle methods, this keyword.
Function: Simpler, use hooks for state and effects.

- What are some of the problems that hooks were designed to solve?
Simplify state management and lifecycle logic in function components, and reduce complexity caused by this in class components.
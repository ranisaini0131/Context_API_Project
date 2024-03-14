React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

@vitejs/plugin-react uses Babel for Fast Refresh
@vitejs/plugin-react-swc uses SWC for Fast Refresh
Context API
# Usage
import React, call creatContext() on it, store into a variable and export the variable.
[In seperate file] 2. Context provides a Provider, which works as a wrapper around our context componenet and we can wrap any component and access it anywhere throught out the project via Context variable.

we create a function as contextProvider and pass {children} as prop, so whatever is coming into children will passed into function as it is.

that children prop is wrapped inside a contextProvider tag where we use value prop to pass our data and make available it globally

import it into App file as a

create any component and configure it

how to fetch any global varible defined in global context API into component
In component, use useContext(contextName) hooks and destructure the state, which was passed as props in contextprovider file.

now that state can be used in component{set....}

how to update(sent) any global varible defined in global context API from component
{user}= useContxte(UserContext)

This Project is licensed by Chai Aur Code

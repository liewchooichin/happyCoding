# README

## About Happy Coding

To practice Fork flow in GitHub.

## Configuration

Using Visual Studio Code to create Static Web App:

- Location of application code: /
- API: "" blank
- Location of build output: "/dist"


```
 output_location: "/dist" # Built app content directory - optional
```

## Notes

The content cardcontent.json **must** be put in the **public** folder.

## Router

The sequence of router links. **Routes** must be put below the **Nav.Link**.

The **Navbar** section will include the **collapse**. End this Navbar section, then start the Routes section. The **Routes** is another section by itself.

```
<Router>
    <Navbar>
    Nav Collaspse also inside here
    </Navbar>
    <Nav.Link>Go somewhere</Nav.Lin>
    
    Routes is another div by itself.
    <Routes></Routes>
    
</Router>

```


## Original README from vite@latest

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

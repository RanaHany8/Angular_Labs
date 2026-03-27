TASK 5  >>>>

1. SPA vs MPA

    SPA (Single Page Application): Loads a single HTML page and dynamically updates content as the user interacts. Fast and smooth (e.g., Angular).

    MPA (Multi-Page Application): Traditional web app where every click requests a completely new page from the server. Slower due to full reloads.

2. MVC vs MVVM in Angular

Angular primarily uses the MVVM pattern:

    Model: The data structure and logic (e.g., Student interface).

    View: The UI defined in HTML (student.html).

    ViewModel: The Component class (student.ts) that links the Model to the View using Data Binding.
   
   MVC (Model-View-Controller)

    Model: Data and business logic (e.g., Student interface).

    View: The user interface (HTML/CSS).

    Controller: Processes requests, coordinates between Model and View. In traditional Angular (AngularJS), the Controller was a separate entity.

3. Purpose of Component Files

    .ts (TypeScript): Handles the logic, data properties, and events.

    .html (HTML): Defines the structure and layout of the component.

    .css (CSS): Contains styles local to the component only.

    .spec.ts (Testing): Used for unit testing the component's functionality.

4. Interpolation

Interpolation is a data-binding technique used to display dynamic data from the TypeScript file into the HTML template.

    Syntax: Uses double curly braces {{ }}.

    Example: <h3>{{ student.name }}</h3> will render the actual name stored in the variable.
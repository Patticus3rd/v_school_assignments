<h1>React Review </h1>
</br>
<h3>The 5 Principles: </h3>
<ol>
<li>Declarative - we have to tell react what to do</li>
<li>State-based - 
    1. state: def the current mutable data set of the app
        - 'handling state changes’ is defined as providing a new state, and compare with new state. and render changes.</li>
<li>3. Mono-Flow -  The flow of information is uni-directional. 
    <li> We have state that contains our data, renders it to the view, and view triggers the action for the state change.</li>
        <li>state —> view —> trigger state-changes —> new state —> view —>trigger state changes —></li></li>
<li>Virtual DOM!!! - virtual dom is js object representing the DOM.  As view triggers the changes in the state, the virtual dom is update, then compared with the real DOM. The view then triggers changes in the state and the virtual dom is updated then compared with real DOM.</li>
<li>Component Base - Break components into modular components that perform individual tasks. </li>
</ol>
</br>
<h3>Purposes Of A Web Page</h3>
1) Extract Data From User
2) Manipulate Data
3) Display Data

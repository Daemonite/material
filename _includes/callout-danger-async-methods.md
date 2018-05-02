{% capture callout %}
##### Asynchronous methods and transitions

All API methods are **asynchronous** and start a **transition**. They returns to the caller as soon as the transition is started but **before it ends**. In addition, a method call on a **transitioning component will be ignored**.
{% endcapture %}
{% include callout.html content=callout type="danger" %}
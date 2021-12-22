---
layout: docs
title: Close icon
description: Use a generic close icon for dismissing content like modals and alerts.
group: utilities
redirect_from:
  - /docs/4.4/utilities/close-icon/
  - /docs/4.5/utilities/close-icon/
---

**Be sure to include text for screen readers**, as we've done with `aria-label`.

{% capture example %}
<button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
{% endcapture %}
{% include example.html content=example %}

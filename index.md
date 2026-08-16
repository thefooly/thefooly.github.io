---
layout: default
title: Home
---

<h1>{{ site.title }}</h1>

<h2>Post</h2>

Il sito funziona

{% for post in site.posts %}

### [{{ post.title }}]({{ post.url | relative_url }})

{{ post.date | date: "%d/%m/%Y" }}

{% endfor %}
---
layout: default
title: Home
---

<section class="main" markdown="1">

# Andrea Gallidabino

Docente di informatica. Sito attualmente in costruzione.

In questo spazio raccolgo appunti, progetti, materiale didattico e riflessioni.

</section>

## Ultimi post

<div class="posts">
    {% for post in site.posts %}
        <a
            class="post"
            href="{{ post.url | relative_url }}"
        >
            <h3>{{ post.title }}</h3>
            <div class="post-preview">
                {{ post.date | date: "%d.%m.%Y" }}
                {% if post.categories %}
                    - {{ post.categories | join: ", " }}
                {% endif %}
            </div>
        </a>
    {% endfor %}
</div>
---
layout: default
title: Curriculum Vitae
permalink: /curriculum/
---

# Curriculum

## Esperienze professionali

{% assign experiences = site.cv
    | where: "section", "experience"
    | sort: "date"
    | reverse
%}

<div class="cards cards-single-column">
    {% for item in experiences %}
        <div class="card">
            <div class="card-header">
                <div class="card-left">
                    <div class="card-title">
                        {{ item.role }}
                    </div>
                    <div class="card-subtitle">
                        {{ item.institution }}
                    </div>
                </div>
                <div class="card-right">
                    <div class="card-title">
                        <div class="chip">
                            {{ item.period }}
                        </div>
                    </div>
                    <div class="card-subtitle">
                        {{ item.place }}
                    </div>
                </div>
            </div>
            <div class="card-separator"></div>
            <div class="card-content">
                {{ item.content | markdownify }}
            </div>
        </div>
    {% endfor %}
</div>

## Formazione

{% assign education = site.cv
    | where: "section", "education"
    | sort: "date"
    | reverse
%}

<div class="cards cards-single-column">
    {% for item in education %}
        <div class="card">
            <div class="chip"> {{ item.period }} </div>
            <div class="card-separator"></div>
            <div class="card-title">
                {{ item.certificate }}
            </div>            
            <div class="card-subtitle">
                {{ item.institution }}
            </div>
            <div class="card-subtitle">
                {{ item.place }}
            </div>

            {% assign content = item.content | strip %}
            {% if content != empty %}
                <div class="card-separator"></div>
                {{item.content}}
            {% endif %}
        </div>
    {% endfor %}
</div>

## Altre esperienze lavorative

{% assign extra_experience = site.cv
    | where: "section", "extra_experience"
    | sort: "date"
    | reverse
%}

<div class="cards cards-single-column">
    {% for item in extra_experience %}
        <div class="card">
            <div class="card-header">
                <div class="card-left">
                    <div class="card-title">
                        {{ item.role }}
                    </div>
                    <div class="card-subtitle">
                        {{ item.institution }}
                    </div>
                </div>
                <div class="card-right">
                    <div class="card-title">
                        <div class="chip"> {{ item.period }} </div>
                    </div>
                    <div class="card-subtitle">
                        {{ item.place }}
                    </div>
                </div>
            </div>
            <div class="card-separator"></div>
            <div class="card-content">
                {{ item.content | markdownify }}
            </div>
        </div>
    {% endfor %}
</div>

## Pubblicazioni

[Google Scholar](https://scholar.google.com/citations?user=jKc1qtIAAAAJ&hl=it)

{% assign publications = site.cv
    | where: "section", "publications"
    | sort: "date"
    | reverse
%}

<table class="curriculum-table">
    {% for publication in publications %}
        <tr>
            <td class="curriculum-date">
                <span class="chip">
                    {{ publication.month }}
                    {{ publication.year }}
                </span>
            </td>
            <td class="curriculum-info">
                <div class="curriculum-title">
                    {% if publication.link %}
                        <a href="{{ publication.link }}">
                            {{ publication.publication }}
                        </a>
                    {% else %}
                        {{ publication.publication }}
                    {% endif %}
                </div>
                <div class="curriculum-other">
                    {{ publication.authors | join: ", " }}
                </div>
                <div class="curriculum-other-emph">
                    {{ publication.publisher }}
                </div>
            </td>
        </tr>
    {% endfor %}
</table>

## Insegnamento

{% assign teaching = site.cv
    | where: "section", "teaching"
%}

<div class="cards cards-single-column">
    {% for item in teaching %}
        <div class="card">
            <div class="card-header">
                <div class="card-left">
                    <div class="card-title">
                        {{ item.course }}
                    </div>
                    <div class="card-subtitle">
                        {{ item.organization }}
                    </div>
                </div>
                <div class="card-right">
                    <div class="card-title">
                        {{ item.role }}
                    </div>
                    <div class="card-subtitle">
                        {{ item.level }}
                    </div>
                </div>
            </div>
            <div class="card-separator"></div>
            <div class="card-content">
                {{ item.content | markdownify }}
            </div>
        </div>
    {% endfor %}
</div>

## Studenti

{% assign students = site.cv
    | where: "section", "students"
    | sort: "date"
    | reverse
%}

### Studenti Master

<table class="curriculum-table">
    {% for item in students %}
        {% if item.level == "master" %}
            <tr>
                <td class="curriculum-date">
                    <span class="chip">
                        {{ item.month }}
                        {{ item.year }}
                    </span>
                </td>
                <td class="curriculum-info">
                    <div class="curriculum-title">
                        {% if item.link %}
                            <a href="{{ item.link }}">
                                {{ item.title }}
                            </a>
                        {% else %}
                            {{ item.title }}
                        {% endif %}
                    </div>
                    <div class="curriculum-other">
                        {{ item.student | join: ", " }}
                    </div>
                    <div class="curriculum-other-emph">
                        {{ item.publisher }}
                    </div>
                </td>
            </tr>
        {% endif %}
    {% endfor %}
</table>

### Studenti Bachelor

<table class="curriculum-table">
    {% for item in students %}
        {% if item.level == "bachelor" %}
            <tr>
                <td class="curriculum-date">
                    <span class="chip">
                        {{ item.month }}
                        {{ item.year }}
                    </span>
                </td>
                <td class="curriculum-info">
                    <div class="curriculum-title">
                        {% if item.link %}
                            <a href="{{ item.link }}">
                                {{ item.title }}
                            </a>
                        {% else %}
                            {{ item.title }}
                        {% endif %}
                    </div>
                    <div class="curriculum-other">
                        {{ item.student | join: ", " }}
                    </div>
                    <div class="curriculum-other-emph">
                        {{ item.publisher }}
                    </div>
                </td>
            </tr>
        {% endif %}
    {% endfor %}
</table>

## Conferenze

{% assign conferences = site.cv
    | where: "section", "conferences"
    | sort: "date"
    | reverse
%}

### Web Chair

<table class="curriculum-table">
    {% for item in conferences %}
        {% if item.chair == "web" %}
            <tr>
                <td class="curriculum-date">
                    <span class="chip">
                        {{ item.year }}
                    </span>
                </td>
                <td class="curriculum-info">
                    <div class="curriculum-title">
                        {% if item.link %}
                            <a href="{{ item.link }}">
                                {{ item.conference }}
                            </a>
                        {% else %}
                            {{ item.conference }}
                        {% endif %}
                    </div>
                    <div class="curriculum-other">
                        {{ item.place }}
                    </div>
                </td>
            </tr>
        {% endif %}
    {% endfor %}
</table>

### Session Chair

<table class="curriculum-table">
    {% for item in conferences %}
        {% if item.chair == "session" %}
            <tr>
                <td class="curriculum-date">
                    <span class="chip">
                        {{ item.year }}
                    </span>
                </td>
                <td class="curriculum-info">
                    <div class="curriculum-title">
                        {% if item.link %}
                            <a href="{{ item.link }}">
                                {{ item.conference }}
                            </a>
                        {% else %}
                            {{ item.conference }}
                        {% endif %}
                    </div>
                    <div class="curriculum-other">
                        {{ item.place }}
                    </div>
                </td>
            </tr>
        {% endif %}
    {% endfor %}
</table>

## Progetti

{% assign projects = site.cv
    | where: "section", "projects"
    | sort: "date"
    | reverse
%}

<table class="curriculum-table">
    {% for item in projects %}
        <tr>
            <td class="curriculum-date">
                <span class="chip">
                    {{ item.period }}
                </span>
            </td>
            <td class="curriculum-info">
                <div class="curriculum-title">
                    {% if item.link %}
                        <a href="{{ item.link }}">
                            {{ item.project }}
                        </a>
                    {% else %}
                        {{ item.project }}
                    {% endif %}
                </div>
                <div class="curriculum-other">
                    {{ item.organization }}
                </div>
            </td>
        </tr>
    {% endfor %}
</table>

## Program Committees

{% assign committees = site.cv
    | where: "section", "committees"
    | sort: "date"
    | reverse
%}

<table class="curriculum-table">
    {% for item in committees %}
        <tr>
            <td class="curriculum-date">
                <span class="chip">
                    {{ item.year }}
                </span>
            </td>
            <td class="curriculum-info">
                <div class="curriculum-title">
                    {% if item.link %}
                        <a href="{{ item.link }}">
                            {{ item.organization }}
                        </a>
                    {% else %}
                        {{ item.organization }}
                    {% endif %}
                </div>
            </td>
        </tr>
    {% endfor %}
</table>

## Tutorials

{% assign tutorials = site.cv
    | where: "section", "tutorials"
    | sort: "date"
    | reverse
%}

<table class="curriculum-table">
    {% for item in tutorials %}
        <tr>
            <td class="curriculum-date">
                <span class="chip">
                    {{ item.month }}
                    {{ item.year }}
                </span>
            </td>
            <td class="curriculum-info">
                <div class="curriculum-title">
                    {% if item.link %}
                        <a href="{{ item.link }}">
                            {{ item.title }}
                        </a>
                    {% else %}
                        {{ item.title }}
                    {% endif %}
                </div>
                <div class="curriculum-other">
                    {{ item.authors | join: ", " }}
                </div>
                <div class="curriculum-other-emph">
                    {{ item.conference }}
                </div>
            </td>
        </tr>
    {% endfor %}
</table>

## Premi

{% assign awards = site.cv
    | where: "section", "awards"
    | sort: "date"
    | reverse
%}

<table class="curriculum-table">
    {% for item in awards %}
        <tr>
            <td class="curriculum-date">
                <span class="chip">
                    {{ item.month }}
                    {{ item.year }}
                </span>
            </td>
            <td class="curriculum-info">
                <div class="curriculum-title">
                    {% if item.link %}
                        <a href="{{ item.link }}">
                            {{ item.title }}
                        </a>
                    {% else %}
                        {{ item.title }}
                    {% endif %}
                </div>
                <div class="curriculum-other-emph">
                    {{ item.organization }}
                </div>
                <div class="curriculum-content">
                    {{ item.content | markdownify }}
                </div>
            </td>
        </tr>
    {% endfor %}
</table>

## Talks

{% assign talks = site.cv
    | where: "section", "talks"
    | sort: "date"
    | reverse
%}

### Seminari

<table class="curriculum-table">
    {% for item in talks %}
        {% if item.type == "seminar" %}
            <tr>
                <td class="curriculum-date">
                    <span class="chip">
                        {{ item.year }}
                    </span>
                </td>
                <td class="curriculum-info">
                    <div class="curriculum-title">
                        {% if item.link %}
                            <a href="{{ item.link }}">
                                {{ item.title }}
                            </a>
                        {% else %}
                            {{ item.title }}
                        {% endif %}
                    </div>
                    <div class="curriculum-other">
                        {{ item.organization }}
                    </div>
                </td>
            </tr>
        {% endif %}
    {% endfor %}
</table>


### Altre presentazioni

<table class="curriculum-table">
    {% for item in talks %}
        {% if item.type == "other" %}
            <tr>
                <td class="curriculum-date">
                    <span class="chip">
                        {{ item.year }}
                    </span>
                </td>
                <td class="curriculum-info">
                    <div class="curriculum-title">
                        {% if item.link %}
                            <a href="{{ item.link }}">
                                {{ item.title }}
                            </a>
                        {% else %}
                            {{ item.title }}
                        {% endif %}
                    </div>
                    <div class="curriculum-other">
                        {{ item.organization }}
                    </div>
                </td>
            </tr>
        {% endif %}
    {% endfor %}
</table>

## Collaborazioni

{% assign collaborations = site.cv
    | where: "section", "collaborations"
    | sort: "date"
    | reverse
%}

### Eventi

<table class="curriculum-table">
    {% for item in collaborations %}
        {% if item.type == "event" %}
            <tr>
                <td class="curriculum-date">
                    <span class="chip">
                        {{ item.year }}
                    </span>
                </td>
                <td class="curriculum-info">
                    <div class="curriculum-title">
                        {% if item.link %}
                            <a href="{{ item.link }}">
                                {{ item.title }}
                            </a>
                        {% else %}
                            {{ item.title }}
                        {% endif %}
                    </div>
                    <div class="curriculum-other">
                        {{ item.organization }}
                    </div>
                </td>
            </tr>
        {% endif %}
    {% endfor %}
</table>

### Mentoring

<table class="curriculum-table">
    {% for item in collaborations %}
        {% if item.type == "mentoring" %}
            <tr>
                <td class="curriculum-date">
                    <span class="chip">
                        {{ item.year }}
                    </span>
                </td>
                <td class="curriculum-info">
                    <div class="curriculum-title">
                        {% if item.link %}
                            <a href="{{ item.link }}">
                                {{ item.title }}
                            </a>
                        {% else %}
                            {{ item.title }}
                        {% endif %}
                    </div>
                    <div class="curriculum-other">
                        {{ item.organization }}
                    </div>
                </td>
            </tr>
        {% endif %}
    {% endfor %}
</table>
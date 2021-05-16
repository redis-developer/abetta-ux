# ABettaMe

## Abstract

Why settle when you can always be better? 

ABettaMe helps you perform experiments about things you want to change in your life. It does so, by tracking metrics & analysing provided values to tell you if there's a statistically significant difference between your control & treatment groups.

## Description

Hi! We are Pavlos and Antonis and we are the creators of AbettaMe, a fun app we have created for the [Redis Hackathon](https://redislabs.com/hackathon-2021/).

ABettaMe is a great way to measure the effects of positive changes on your lifestyle. We all come across multiple studies about the effects of certain diets or lifestyle changes, but we often have no way to measure the effect of them on our lives. Through our app, users can perform experiments on themselves, by separating their days into control and treatment. 

Through our microservices architecture, the frontend first notifies the backend for any new metrics, which are saved in Redis JSON store. New metrics are also published through Redis PubSub module and a recommendations microservice analyses the data and performs significance testing.

The user can then identify if the changes are indeed having an impact on their desired metrics.
We hope that you liked our hack! Stay safe!

## Running the App

### Locally

- `docker-compose up -d`
- Open a browser & hit `http://localhost:8080/`

### Web Deployment

- Open a browser & hit `https://abetta-gw.herokuapp.com/`

## Modules

### ABettaMe Dashboard

UI interface to manage existing experiments, or record new ones.

Technologies used: TypeScript, React

Repo link: [abetta-ux](https://github.com/ABettaMe/abetta-ux)

### ABettaMe Gateway

Application gateway that routes traffic to appropriate downstream services.

Technologies used: Java, Spring Cloud Gateway

Repo link: [abetta-gateway](https://github.com/ABettaMe/abetta-gateway)

### ABettaMe Experiments

Microservice holding all business logic around the creation and management of experiments.

Technologies used: Java, Spring Boot, RedisJSON, Redis Pub/Sub

Repo link: [abetta-xp](https://github.com/ABettaMe/abetta-xp)

### ABettaMe Recommendation

Recommendation service that analyses experiments & performs statistical significance testing.

Technologies used: C#, .NET 5, RedisJSON, Redis Pub/Sub

Repo link: [abetta-rec](https://github.com/ABettaMe/abetta-rec)

### ABettaMe Contract

Repository holding all contracts shared between different services.

Technologies used: Google Protocol Buffers

Repo link: [abetta-contract](https://github.com/ABettaMe/abetta-contract)

## High-Level Overview of Application

![ABettaMe App](abettame.png)
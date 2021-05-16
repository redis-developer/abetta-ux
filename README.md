# ABettaMe

## Abstract

Why settle when you can always be better? 

ABettaMe helps you perform experiments about things you want to change in your life. It does so, by tracking metrics & analysing provided values to tell you if there's a statistically significant difference between your control & treatment groups.

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

## High-Level Overview of Application

![ABettaMe App](abettame.png)
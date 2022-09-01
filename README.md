# Витрина и корзина, соединенные через Redux

Часто начинающие программисты пишут на React всё веб-приложение, сводя html-составляющую фактически к 

```
<div id="root"></div>
```
.

Такой способ замедляет работу страницы, снижает ее ценность для поисковых систем (SEO). 

Более целесообразным является подход,
когда максимально используется html, а на JavaScript пишутся только фрагменты, требующие интерактивности. Однако при этом 
возникают затруднения в организации взаимодействия между ними.

Данный проект демонстрирует связь разрозненных react-компонентов посредством технологии Redux: витрина и корзина
реализованы на разных участках html-кода, но, благодаря общему хранилищу состояний (store), прекрасно "видят" друг друга. 

[Посмотреть готовое решение можно здесь](https://yababay.github.io/gribochki/).

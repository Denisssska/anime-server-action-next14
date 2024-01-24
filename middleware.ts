import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
	const requestHeaders = new Headers(request.headers)
	requestHeaders.set('x-pathname', request.nextUrl.pathname)

	return NextResponse.next({
		request: {
			headers: requestHeaders,
		},
	})
}
// Этот код представляет собой промежуточное программное обеспечение (middleware) для Next.js, который работает на уровне сервера или, точнее, на уровне роутинга, используемого Next.js.

// Во-первых, давайте разберемся с импортами:

// import { NextRequest, NextResponse } from "next/server";
// NextRequest - это класс, представляющий входящий запрос к серверу на платформе Next.js.
// NextResponse - это класс, с помощью которого можно создавать ответ сервера.
// Теперь давайте разберем саму функцию middleware:

// export function middleware(request: NextRequest) {
//   ...
// }
// Эта функция предназначена для обработки запросов при их поступлении к серверу Next.js. Она принимает объект запроса NextRequest.

// Внутри функции создается новый объект Headers на основе заголовков из исходного запроса:

// const requestHeaders = new Headers(request.headers);
// Затем в эти заголовки добавляется новый заголовок x-pathname, содержащий путь запроса (pathname) из URL, по которому был сделан запрос:

// requestHeaders.set("x-pathname", request.nextUrl.pathname);
// request.nextUrl - это объект URL, который предоставляет удобный интерфейс для чтения и изменения частей URL запроса. pathname является частью этого URL, указывающей на конкретный путь (например, /about).

// Наконец, функция возвращает ответ, используя статический метод NextResponse.next(). Этот метод указывает Next.js продолжать обработку запроса как обычно, но с возможными изменениями. В данном случае изменения касаются только заголовков запроса:

// return NextResponse.next({
//   request: {
//     headers: requestHeaders
//   }
// });
// В этом блоке кода отправляется объект request с модифицированными headers в качестве параметра для создания нового объекта NextResponse. Таким образом, когда Next.js продолжит обработку запроса, все последующие обработчики будут видеть новый заголовок x-pathname.

// Это может быть полезно в случаях, когда необходимо добавить какие-либо метаданные к запросу для использования в последующих обработчиках или для ведения логов.
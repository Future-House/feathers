import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@future-house/feathers';

export default function CarouselExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Carousel Components</CardTitle>
        <CardDescription>
          Interactive carousel component examples with different
          configurations
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Basic Horizontal Carousel
          </h3>
          <Carousel className="mx-auto w-full max-w-xs">
            <CarouselContent>
              {Array.from({ length: 5 }, (_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Multiple Items Per View
          </h3>
          <Carousel
            opts={{
              align: 'start',
            }}
            className="mx-auto w-full max-w-sm"
          >
            <CarouselContent>
              {Array.from({ length: 10 }, (_, index) => (
                <CarouselItem key={index} className="basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-2xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Content Showcase Carousel
          </h3>
          <Carousel className="mx-auto w-full max-w-lg">
            <CarouselContent>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white">
                      <h3 className="mb-2 text-xl font-bold">Welcome</h3>
                      <p className="text-center">
                        Discover our amazing component library
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center bg-gradient-to-br from-green-500 to-teal-600 p-8 text-white">
                      <h3 className="mb-2 text-xl font-bold">Explore</h3>
                      <p className="text-center">
                        Find the perfect components for your project
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center bg-gradient-to-br from-orange-500 to-red-600 p-8 text-white">
                      <h3 className="mb-2 text-xl font-bold">Get Started</h3>
                      <p className="text-center">
                        Begin building your application today
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Image Gallery Carousel
          </h3>
          <Carousel
            opts={{
              loop: true,
            }}
            className="mx-auto w-full max-w-md"
          >
            <CarouselContent>
              {Array.from({ length: 4 }, (_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-video items-center justify-center rounded-lg bg-slate-200 p-0 dark:bg-slate-700">
                        <div className="text-center">
                          <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-lg bg-slate-300 dark:bg-slate-600">
                            <span className="text-2xl">🖼️</span>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Image {index + 1}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </CardContent>
    </Card>
  );
}
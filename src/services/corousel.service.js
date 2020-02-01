export default class CarouselService {
    // -----------------------------------------------------------
    static nextCarouselItem() {
        let { carouselIndex, services } = this.state;
        if (carouselIndex !== services.length - 1) {
            carouselIndex++;
            this.updateCarouselState(carouselIndex, services)
        }
    }
    // -----------------------------------------------------------
    static prevCarouselItem() {
        let { carouselIndex, services } = this.state;
        if (carouselIndex !== 0) {
            carouselIndex--
            this.updateCarouselState(carouselIndex, services)
        }
    }
    // -----------------------------------------------------------
    static updateCarouselState(carouselIndex, services) {
        this.setState({
            carouselIndex,
            service: services[carouselIndex]
        })
    }
}
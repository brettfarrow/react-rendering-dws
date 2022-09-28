import SlideButton from "./SlideButton"

export default function NavigationButtons({ slide }) {
  return (
    <>
      {slide > 0 && (
        <SlideButton
          slideDisplayNumber={slide - 1}
          slideNumber={"0" + (slide - 1)}
          prefix="Previous"
        />
      )}
      {slide < 7 && (
        <SlideButton
          slideDisplayNumber={slide + 1}
          slideNumber={"0" + (slide + 1)}
          prefix="Next"
        />
      )}
    </>
  )
}

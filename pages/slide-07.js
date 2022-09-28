import ExpandedList from "../components/ExpandedList"
import ExpandedLinkList from "../components/ExpandedLinkList"
import ItDepends from "../components/ItDepends"
import MemoizedHeadline from "../components/MemoizedHeadline"
import NavigationButtons from "../components/NavigationButtons"
import CustomHeadlineSimplified from "../components/CustomHeadlineSimplified"

export default function Slide07() {
  const slide = 7
  const considerations = [
    "Not all renders need to be eliminated",
    "You're usually better off optimizing the slowest render instead of minimizing renders",
    "Know your target / performance budget",
  ]
  const recommendedArticles = [
    {
      title: "Why React Re-Renders",
      href: "https://www.joshwcomeau.com/react/why-react-re-renders/",
    },
    {
      title: "A Visual Guide to React Rendering by Alex Sidorenko",
      href: "https://alexsidorenko.com/blog/react-render-always-rerenders/",
    },
    {
      title: "Faster React Apps with Memoization",
      href: "https://blog.px.dev/ui-performance/",
    },
    {
      title: "Use React.memo() wisely by Dmitri Pavlutin",
      href: "https://dmitripavlutin.com/use-react-memo-wisely/",
    },
  ]

  return (
    <main className="flex h-screen">
      <div className="m-auto">
        <MemoizedHeadline
          text={`Slide ${slide}: Should you refactor all your code?`}
        />
        <ItDepends />
        <CustomHeadlineSimplified
          className={"mt-4 mb-2 text-xl font-semibold"}
          text={"Things you should consider:"}
        />
        <ExpandedList list={considerations} />
        <CustomHeadlineSimplified
          className={"mt-4 mb-2 text-xl font-semibold"}
          text={"Recommended reading:"}
        />
        <ExpandedLinkList list={recommendedArticles} />
        <NavigationButtons slide={slide} />
      </div>
    </main>
  )
}

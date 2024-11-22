import ReviewPageHeader from "@/components/review_section/ReviewPageHeader"
import FilterBar from "@/components/review_section/filter"
import ReviewBody from "@/components/review_section/review_body"

export default function Reviews() {
    return (
        <div className="mt-10 p-20">
            <ReviewPageHeader />
            <FilterBar />
            <ReviewBody />
        </div>
    )
}
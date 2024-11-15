import ReviewHeader from "@/components/review_section/header";
import ReviewBody from "@/components/review_section/review_body";
import FilterBar from "@/components/review_section/filter";

export default function Product() {
    return (
        <div className="p-9">
            <ReviewHeader />
            <FilterBar />
            <ReviewBody />
        </div>
    );
}
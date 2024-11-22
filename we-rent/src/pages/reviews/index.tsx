import ReviewPageHeader from "@/components/review_section/ReviewPageHeader";
import FilterBar from "@/components/review_section/filter";
import ReviewBody from "@/components/review_section/review_body";

export default function Reviews() {
    return (
        <div className="mt-10 p-20">
            <ReviewPageHeader 
                comment="This is a sample review comment."
                date="2024-11-22"
                helpfulCount={5}
            />
            <FilterBar 
                onFilterChange={() => console.log('Filter changed')} 
            />
            <ReviewBody
                comment="This is a sample review comment."
                date="2024-11-22"
                helpfulCount={5}
                rating={4.5}
                user={{
                    avatarUrl: "https://via.placeholder.com/50",
                    height: 170,
                    weight: 65,
                    measurements: { bust: 90, waist: 70, hips: 95 },
                }}
            />
        </div>
    );
}
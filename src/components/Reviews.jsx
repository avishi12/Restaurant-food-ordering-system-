import { Card, CardBody, CardText, CardFooter, CardTitle } from 'react-bootstrap';
import './Reviews.css';
import Person1 from '../utils/img/person1.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';

export function Reviews() {

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch reviews from the API using axios
        const fetchReviews = async () => {
            try {
                const response = await axios.get('http://localhost:8100/api/v1/reviews/getreviews');
                setReviews(response.data); 
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-danger">Error: {error}</div>;
    }

    return (
        <div className="reviews-section container">
            <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reviews</h2>
            <div className="row g-4">

            {reviews.map((review, index) => (
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                {review.comment}
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            {/* <img src={Person1} className="img-fluid rounded-circle mx-3 shadow" alt="" /> */}
                            <CardTitle className="text-success">{review.firstName} {review.lastName}</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
            ))}
            </div>
        </div>
    )
}
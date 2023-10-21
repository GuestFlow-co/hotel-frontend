import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Container,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import cookie from "react-cookies";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import RoomList from "../List/RoomList";
import { addComment } from "../../../store/actions/Rooms/RoomActions";
import Rating from "../Rate/Rate";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#f2e0d9", // Light brown background
    padding: "20px",
    borderRadius: "10px",
    border: "1px solid #c7a791", // Light brown border
  },
  form: {
    flex: 1,
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
  },
  comments: {
    flex: 1,
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
  },
  starIcon: {
    fontSize: "20px",
    marginRight: "5px",
    color: "#8B4513", // Brown color
  },
  button: {
    backgroundColor: "#8B4513", // Brown color
    color: "white",
    _hover: {
      backgroundColor: "#d1935b", // Darker brown on hover
    },
  },
};

function Review() {
  const { room_number } = useParams();
  const user = cookie.load("user");
  let userId = user ? user.user_id : "";

  const dispatch = useDispatch();

  const comments = useSelector((state) => state.rooms.comments);
  const rooms = useSelector((state) => state.rooms.rooms);
  const bookings = useSelector((state) => state.bookings.bookings);
  const isBooked = bookings.find((booking) => booking.customer_id === userId);
  const room = rooms.find((room) => room.room_number === room_number);
  const roomId = room.Room_id;
  const comment = comments.filter((comment) => comment.theRoom_id === roomId);

  const [formData, setFormData] = useState({
    theRoom_id: roomId,
    commentName: user ? user.commentName : "",
    Email: user ? user.email : "",
    Rating: "",
    comment: "",
  });
  const [allcomment, setAllcomment] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [postReview, setPostReview] = useState("");
  const [showAllComments, setShowAllComments] = useState(false);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      theRoom_id: formData.theRoom_id,
      commentName: user.username,
      Email: user.email,
      comment: formData.comment,
      Rating: room.userRate,
    };

    setAllcomment([...allcomment, newReview]);

    setFormData({
      ...formData,
      comment: "",
      commentName: user.username,
      Email: user.email,
      Rating: room.userRate,
    });

    dispatch(addComment(newReview));

    setIsUpdated(true);
  };

  const toggleShowAllComments = () => {
    setShowAllComments(!showAllComments);
  };

  return (
    <>


      <div className="container">
        <div className="row">
          <div className="comments col-lg-7 my-60" style={{minHeight:'477px'}}>
            <h3 className="comment-title">Reviews</h3>
            {comment.map((comment, index) => (
              <div className="comment-body wow fadeInUp delay-0-2s" key={index}>
                <div className="author-thumb">
                  {/* You can add any author information here */}
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li style={{ display: 'flex' }}>
                      <h6>{comment.commentName}</h6>
                      <Flex ml={30}>
                        {Array(5)
                          .fill(parseInt(comment.Rating))
                          .map((_, starIndex) => (
                            <FaStar
                              key={starIndex}
                              size={20}
                              color={starIndex < comment.Rating ? colors.orange : colors.grey}
                              style={{ marginRight: 10, cursor: "pointer" }}
                            />
                          ))}
                      </Flex>
                    </li>
                    <li>
                      <p>{/* You can add a date here */}</p>
                    </li>
                  </ul>
                  <p style={{ fontSize: "16px", color: 'gray' }}>

                    <i className="fas fa-quote-left pe-2"></i>
                    {comment.comment}</p>
                </div>  
              </div>
            ))}
          </div>

          <div className="col-lg-5">
            <form onSubmit={handleReviewSubmit} className="comment-form bgc-lighter mt-60 wow fadeInUp delay-0-2s">
              <h3>Add Review</h3>
              <p>we denounce with righteous indignation and dislike men who beguiled</p>
              <div className="row mt-30">
                <div className="col-md-12">
                  <div className="form-group">

                    <Textarea
                      id="comment"
                      rows="4"
                      required
                      className="form-control"
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      borderColor="brown"
                      placeholder="Message"
                    />
                    <h4 className="py-10">How was your experience?</h4>

                 
                    {!user ? (
                      <>
                        {/* <FaStar style={styles.starIcon} /> */}
                        <div className="col-md-12 p-20">
                          <div className="">
                            <Link to="/login">
                              <button className="theme-btn">Submit <i className="fa fa-angle-right"></i></button>
                            </Link>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div>
                        <Rating room={room} />
                        <div className="col-md-12 pt-20">
                          <div className="">
                            <button type="submit" className="theme-btn">
                              Submit <i className="fa fa-angle-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    {isUpdated && (
                      <div className="theToast">
                        {postReview && <p className="top-error-bar">{postReview}</p>}
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>


      {/* <Flex pb="10%" pt="10%">
        <Container ml="3%" w="70%" mr="5%">
          <div className="main-div-comments" style={{ maxHeight: '400px' }}>
            <h3>Reviews</h3>
            <div className="under-header">
              <div className="comments-cards">
                {showAllComments
                  ? comment.map((comment, index) => (
                    <div key={index} className="card-body py-4 mt-2 inside-card">
                      <Flex ml={30}>
                        {Array(5)
                          .fill(parseInt(comment.Rating))
                          .map((_, starIndex) => (
                            <FaStar
                              key={starIndex}
                              size={20}
                              color={starIndex < comment.Rating ? colors.orange : colors.grey}
                              style={{ marginRight: 10, cursor: "pointer" }}
                            />
                          ))}
                      </Flex>
                      <p className="font-weight-bold">{comment.commentName}</p>
                      <p className="mb-2">
                        <i className="fas fa-quote-left pe-2"></i>
                        {comment.comment}
                      </p>
                    </div>
                  ))
                  : comment.slice(0, 5).map((comment, index) => (
                    <div key={index} className="card-body py-4 mt-2 inside-card">
                      <Flex ml={30}>
                        {Array(5)
                          .fill(parseInt(comment.Rating))
                          .map((_, starIndex) => (
                            <FaStar
                              key={starIndex}
                              size={20}
                              color={starIndex < comment.Rating ? colors.orange : colors.grey}
                              style={{ marginRight: 10, cursor: "pointer" }}
                            />
                          ))}
                      </Flex>
                      <p className="font-weight-bold">{comment.commentName}</p>
                      <p className="mb-2">
                        <i className="fas fa-quote-left pe-2"></i>
                        {comment.comment}
                      </p>
                    </div>
                  ))}
              </div>
              {comment.length > 5 && (
                <button onClick={toggleShowAllComments} className="show-more-button">
                  {showAllComments ? "Show Less" : "Show More"}
                </button>
              )}
            </div>
          </div>
        </Container>

        <Container mr="2%" w="40%">
          <form onSubmit={handleReviewSubmit} className="rating-form-detalis">
            <p id="comments" style={{ fontWeight: 'bold' }}>Add Review</p>
            <hr style={{ borderColor: "brown", borderWidth: "1px", margin: "10px 0" }} />

            <label htmlFor="comment">Your Comment</label>

            <Textarea
              id="comment"
              required
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              borderColor="brown"
            />
            <br />
            <p>How was your experience?</p>
            <div className="stars">
            </div>
            {!user ? (
              <>
                <FaStar style={styles.starIcon} />
                <Link to="/login">
                  <Button w={7} style={{ background: '#ab6034' }}>Submit</Button>
                </Link>
              </>
            ) : (
              <div>
                <Rating room={room} />
                <Button type="submit" style={{ background: '#ab6034' }} className="btn-Booking-Now">
                  Submit
                </Button>
              </div>
            )}
            {isUpdated && (
              <div className="theToast">
                {postReview && <p className="top-error-bar">{postReview}</p>}
              </div>
            )}
          </form>
        </Container>
      </Flex> */}
    </>
  );
}

export default Review;

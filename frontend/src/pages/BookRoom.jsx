import { useState} from 'react';
import { Container, Form, Row, Col, Button, Card, Modal, Carousel } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import './BookRoom.css';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt, FaUserFriends, FaBed, FaArrowLeft } from 'react-icons/fa';

function BookRoom() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    checkIn: null,
    checkOut: null,
    adults: 2,
    children: 0,
    roomType: location.state?.roomType || 'classic',
    specialRequests: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Room types data with your actual assets
  const roomTypes = [
    {
      id: 'classic',
      name: 'Classic Room',
      description: 'Elegant comfort with modern amenities and garden view',
      price: 250,
      capacity: 2,
      images: [
        '/assets/rooms/classic1.avif',
        '/assets/rooms/classic2.avif',
        '/assets/rooms/classic3.avif',
        '/assets/rooms/classic4.avif'
      ]
    },
    {
      id: 'corner',
      name: 'Corner Suite',
      description: 'Spacious corner suite with panoramic windows',
      price: 350,
      capacity: 2,
      images: [
        '/assets/rooms/corner1.jfif',
        '/assets/rooms/corner2.avif',
        '/assets/rooms/corner3.avif',
        '/assets/rooms/corner4.avif'
        ]
    },
    {
      id: 'superior',
      name: 'Superior Room',
      description: 'Luxurious room with premium amenities and lake view',
      price: 400,
      capacity: 2,
      images: [
        '/assets/rooms/superior1.jfif',
        '/assets/rooms/superior2.avif',
        '/assets/rooms/superior3.avif',
        '/assets/rooms/superior4.avif'
      ]
    },
    {
      id: 'terrace',
      name: 'Terrace Room',
      description: 'Private terrace with stunning sunset views',
      price: 450,
      capacity: 2,
      images: [
        '/assets/rooms/Terrace1.jfif',
        '/assets/rooms/Terrace2.avif'
      ]
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
      if (process.env.NODE_ENV === 'development') {
        console.log('Booking submitted:', formData);
      }
    }, 1500);
  };

  const calculateNights = () => {
    if (formData.checkIn && formData.checkOut) {
      const diff = formData.checkOut - formData.checkIn;
      return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  const calculateTotal = () => {
    const selectedRoom = roomTypes.find(r => r.id === formData.roomType);
    return selectedRoom ? calculateNights() * selectedRoom.price : 0;
  };

return (
  <>
  <Container className="booking-page py-5" style={{ marginTop: '80px' }}>
    <Row className="justify-content-center">
      <Col lg={10} xl={8}>
        <Button as={Link} to="/" variant="outline-secondary" className="mb-4" style={{ whiteSpace: 'nowrap' }}>
          <FaArrowLeft className="me-2" /> Back to Home
        </Button>

        <h2 className="text-center mb-5 section-title">Reserve Your Stay</h2>
        
        <Row className="g-4">
          {/* Room Selection */}
          <Col md={6} className="mb-4">
            <Card className="shadow-sm room-gallery-card h-100">
              <Card.Body className="p-0 d-flex flex-column">
                <div style={{ height: '400px', overflow: 'hidden' }}>
                  <Carousel fade interval={null}>
                    {roomTypes.find(r => r.id === formData.roomType)?.images.map((img, index) => (
                      <Carousel.Item key={index}>
                        <img
                          className="d-block w-100 h-100"
                          src={img}
                          alt={`${formData.roomType} room`}
                          style={{ objectFit: 'cover' }}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
                <div className="p-4">
                  <h3 className="mb-3">{roomTypes.find(r => r.id === formData.roomType)?.name}</h3>
                  <p className="text-muted mb-4">
                    {roomTypes.find(r => r.id === formData.roomType)?.description}
                  </p>
                  <div className="room-features mt-auto">
                    <div><FaBed className="me-2" /> {roomTypes.find(r => r.id === formData.roomType)?.capacity} Guests</div>
                    <div className="price">${roomTypes.find(r => r.id === formData.roomType)?.price} <span>/ night</span></div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Booking Form */}
          <Col md={6}>
            <Card className="shadow-sm booking-form-card h-100">
              <Card.Body className="p-4">
                <h4 className="mb-4">Booking Details</h4>
                <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label><FaCalendarAlt className="me-2" />Check-In</Form.Label>
                      <DatePicker
                        selected={formData.checkIn}
                        onChange={(date) => setFormData({...formData, checkIn: date})}
                        minDate={new Date()}
                        className="form-control"
                        placeholderText="Select date"
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label><FaCalendarAlt className="me-2" />Check-Out</Form.Label>
                      <DatePicker
                        selected={formData.checkOut}
                        onChange={(date) => setFormData({...formData, checkOut: date})}
                        minDate={formData.checkIn || new Date()}
                        className="form-control"
                        placeholderText="Select date"
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label><FaUserFriends className="me-2" />Adults</Form.Label>
                      <Form.Control
                        type="number"
                        min="1"
                        value={formData.adults}
                        onChange={(e) => setFormData({...formData, adults: parseInt(e.target.value)})}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label><FaUserFriends className="me-2" />Children</Form.Label>
                      <Form.Control
                        type="number"
                        min="0"
                        value={formData.children}
                        onChange={(e) => setFormData({...formData, children: parseInt(e.target.value)})}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group>
                      <Form.Label><FaBed className="me-2" />Room Type</Form.Label>
                      <div className="room-type-buttons">
                        {roomTypes.map(room => (
                          <Button
                            key={room.id}
                            variant={formData.roomType === room.id ? 'primary' : 'outline-secondary'}
                            onClick={() => setFormData({...formData, roomType: room.id})}
                            className="me-2 mb-2"
                          >
                            {room.name}
                          </Button>
                        ))}
                      </div>
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group>
                      <Form.Label>Special Requests</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        value={formData.specialRequests}
                        onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                        placeholder="Any special requirements?"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={12} className="mt-4">
                    <Button 
                      variant="primary" 
                      type="submit" 
                      className="w-100 py-3 booking-submit-btn"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Processing...' : 'Reserve Now'}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        </Row>
       </Col>
      </Row>
      </Container>

      {/* Success Modal */}
      <Modal show={showSuccess} onHide={() => setShowSuccess(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Booking Confirmed!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center mb-4">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="11" fill="#4CAF50"/>
              <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <h4 className="mt-3">Thank You!</h4>
          </div>
          <p>Your reservation for the <strong>{roomTypes.find(r => r.id === formData.roomType)?.name}</strong> has been received.</p>
          <ul className="booking-details-list">
            <li>
              <span>Dates:</span>
              <span>{formData.checkIn?.toLocaleDateString()} - {formData.checkOut?.toLocaleDateString()} ({calculateNights()} nights)</span>
            </li>
            <li>
              <span>Guests:</span>
              <span>{formData.adults} Adult{formData.adults !== 1 ? 's' : ''}{formData.children > 0 && `, ${formData.children} Child${formData.children !== 1 ? 'ren' : ''}`}</span>
            </li>
            <li>
              <span>Total:</span>
              <span>${calculateTotal().toLocaleString()}</span>
            </li>
          </ul>
          <p className="mt-3">A confirmation has been sent to your email.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSuccess(false)}>
            Close
          </Button>
          <Button as={Link} to="/profile" variant="primary" onClick={() => setShowSuccess(false)}>
            View My Bookings
          </Button>
        </Modal.Footer>
      </Modal>
    
    </>
  );
}

export default BookRoom;
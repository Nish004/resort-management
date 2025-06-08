'use client';
import { useState } from 'react';
import { Container, Card, Button, Row, Col, Modal, Form } from 'react-bootstrap';
import Image from 'next/image';
import styles from './bookroom.module.css';

const rooms = [
  {
    id: 'classic',
    name: 'Classic Room',
    description: 'Cozy room with essential amenities.',
    image: '/assets/rooms/classic1.avif',
    price: 120
  },
  {
    id: 'corner',
    name: 'Corner Room',
    description: 'Spacious room with corner views.',
    image: '/assets/rooms/corner2.avif',
    price: 150
  },
  {
    id: 'superior',
    name: 'Superior Room',
    description: 'Elegant room with premium furnishings.',
    image: '/assets/rooms/superior1.jfif',
    price: 200
  },
  {
    id: 'terrace',
    name: 'Terrace Room',
    description: 'Luxury room with private terrace.',
    image: '/assets/rooms/terrace1.jfif',
    price: 250
  }
];

export default function BookRoomPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<any>(null);

  const handleBookClick = (room: any) => {
    setSelectedRoom(room);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedRoom(null);
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Book Your Stay</h2>
      <Row className="g-4">
        {rooms.map((room) => (
          <Col key={room.id} md={6} lg={3}>
            <Card className="h-100 shadow-sm">
              <div className={styles.imageWrapper}>
                <Image
                  src={room.image}
                  alt={room.name}
                  layout="fill"
                  className={styles.roomImage}
                  objectFit="cover"
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{room.name}</Card.Title>
                <Card.Text>{room.description}</Card.Text>
                <div className="mt-auto">
                  <p><strong>${room.price}</strong> / night</p>
                  <Button variant="dark" onClick={() => handleBookClick(room)}>
                    Book Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Booking Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Book {selectedRoom?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  <Form>
    <Form.Group className="mb-3">
      <Form.Label>Your Name</Form.Label>
      <Form.Control type="text" placeholder="Enter your name" />
    </Form.Group>

    <Row className="mb-3">
      <Col>
        <Form.Label>Check-in Date</Form.Label>
        <Form.Control type="date" />
      </Col>
      <Col>
        <Form.Label>Check-out Date</Form.Label>
        <Form.Control type="date" />
      </Col>
    </Row>

    <Row className="mb-3">
      <Col>
        <Form.Label>Check-in Time</Form.Label>
        <Form.Control type="time" />
      </Col>
      <Col>
        <Form.Label>Check-out Time</Form.Label>
        <Form.Control type="time" />
      </Col>
    </Row>

    <Form.Group className="mb-3">
      <Form.Label>Guests</Form.Label>
      <Form.Control type="number" placeholder="e.g. 2" min={1} />
    </Form.Group>

    {/* Simulated Availability */}
    {selectedRoom && (
      <div className="mb-3">
        <strong>Availability:</strong>{" "}
        <span className={Math.random() > 0.3 ? "text-success" : "text-danger"}>
          {Math.random() > 0.3 ? "Available" : "Partially Booked"}
        </span>
      </div>
    )}

    <Button variant="dark" onClick={handleClose}>
      Confirm Booking
    </Button>
  </Form>
</Modal.Body>

      </Modal>
    </Container>
  );
}

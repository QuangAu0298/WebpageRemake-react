"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import { Container, Navbar, Row, Col, NavLink, InputGroup, Form, Nav, Button } from "react-bootstrap";
import React, { useState } from 'react';
import { Search } from "react-bootstrap-icons";

const DarkPillSearchBar = () => {
  return (
    <Nav className="justify-content-center">
        <Container className="w-100 justify-content-center">
            
            <div id="search-bar" className="input-group input-group-sm rounded-pill">
                <Form.Control type="search" className="form-control form-control-sm rounded-start-pill bg-transparent border-0 custom-search" 
                    placeholder="Search Newgrounds..." 
                />
                <Button className="btn btn-secondary btn-sm rounded-end-pill bg-transparent border-0 " 
                    type="submit">
                    <Search style={{color: '#232525'}}/>
                </Button>
            </div>
            
        </Container>
    </Nav>
  );
};

const TopNavMenu = () => (
  <Navbar className="justify-content-center">
    <Row id="TopMenu" className="justify-content-center">
      <Col className="justify-content-start">
        <NavLink>
          <img src="/newgrounds-seeklogo.png" height="45px"/>
        </NavLink>
      </Col>
      <Col>
        <InputGroup>
          <Form>
            <DarkPillSearchBar />
          </Form>
        </InputGroup>
      </Col>
      <Col className="justify-content-end d-flex align-items-center text-nowrap"
        style={{fontSize: '18pt'}}>
        <NavLink className="orange-link">Login</NavLink>
        <span className="mx-1 text-white">/</span>
        <NavLink className="orange-link">Sign Up</NavLink>
      </Col>
    </Row>
  </Navbar>
);


const CategoryMenu = () => (
  <Container fluid className="d-flex justify-content-center p-0" style={{backgroundColor: '#000000', height: '36px'}}>
    <Navbar id="TopMenu" className="justify-content-center p-0 h-100">
      <Container className="d-flex justify-content-center align-items-center text-nowrap">
        <NavLink className="custom-link" style={{borderBottomColor: 'red'}}>Movies</NavLink>
        <NavLink className="custom-link" style={{borderBottomColor: '#047ff9'}}>Games</NavLink>
        <NavLink className="custom-link" style={{borderBottomColor: '#00c54b'}}>Audio</NavLink>
        <NavLink className="custom-link" style={{borderBottomColor: '#ff09ca'}}>Art</NavLink>
        <NavLink className="custom-link" style={{borderBottomColor: '#b000fc'}}>Portal</NavLink>
        <NavLink className="custom-link" style={{borderBottomColor: '#ff7700'}}>Community</NavLink>
        <NavLink className="custom-link" style={{borderBottomColor: '#fffb00'}}>Your Feed</NavLink>
      </Container>
    </Navbar>
  </Container>

);

const SupportBanner = () => (
  <Container>
    <div id="supportnotif" className="mx-auto">
      <div className="row justify-content-center" style={{color: "#a7a7a7"}}>
            <div className="col" style={{marginLeft: "100px"}}>
                <p style={{color:"#a1a0a0", fontSize: "18px"}}>
                    <a href="#" className="orange-link" style={{color:"rgb(255, 136, 0)"}}>User</a> just joined the crew!
                </p>
                <p style={{color:"#a1a0a0"}}>
                    We need you on the team, too.
                    Support Newgrounds and get tons of perks!
                </p>
            </div>
            <div className="col">
                
            </div>
            <div className="col">
                <p style={{color:'#a1a0a0'}}>
                    <a href="#" className="orange-link" style={{color:"rgb(255, 136, 0)"}}>Create a Free Account</a> and then..</p>
                
                <Button id="supportersignup-btn" className="btn-sm rounded-3">
                <b>Become a Supporter!</b>
                </Button>
            </div>
        </div>
    </div>    
  </Container>
);

const MiddleSection = () => (
  <Container fluid className="img-background">
    <SupportBanner />
  </Container>
);

export default function Home() {
  return (
    <main>
      <Container fluid>
        <TopNavMenu />
        <CategoryMenu />
        <MiddleSection />
      </Container>
    </main>
  );
}
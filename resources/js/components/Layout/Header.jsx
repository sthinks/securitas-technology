import securitasLogo from '../../images/securitas_logo.png';
import securitasLogobeyaz from '../../images/securitas_logo_beyaz.png';
import { TbSearch } from "react-icons/tb";
import { BsXLg } from "react-icons/bs";
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axiosClient from '../AxiosClient';
import { NavDropdown } from 'react-bootstrap';

export default function Header() {
  const [show, setShow] = useState(false);
  const [showNavbarList, setShowNavbarList] = useState(false);
  const [value, setValue] = useState("");
  const [term, setTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [navbar, setNavbar] = useState([]);
  const [navbarShown, setNavbarShown] = useState(true);
  const [sectors, setSectors] = useState()
  const [showSectorList, setShowSectorList] = useState(false)

  const navbarSearchHandler = () => {
    setShow(!show)
  }
  const navbarList = () => {
    setShowNavbarList(true)
  }

  useEffect(() => {
    {
      const search = async () => {
        setLoading(true)
        await axiosClient.get('/api/search?q=' + term)
          .then(function (response) {
            setData(response.data)
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {
            setLoading(false)
          })
      }

      if (term && !data.length) {
        search();
      } else {
        const timeoutId = setTimeout(() => {
          if (term) {
            search();
          }
        }, 1000)
        return () => {
          clearTimeout(timeoutId);
        };
      }
    }
  }, [term])

  useEffect(() => {
    axiosClient
      .get("api/category/cozumler-ve-hizmetler")
      .then(function (response) {
        const navbarItem = response.data.children;
        setNavbar(navbarItem)
      })
  }, [])

  useEffect(() => {
    axiosClient
      .get("api/category/sektorler")
      .then(function (response) {
        const data = response.data.children
        setSectors(data)
      })
  }, [])

  const getWindowDimensions = () => {
    const { innerWidth: width } = window;
    if (width < 480) {
      setNavbarShown(false)
    }
  }

  useEffect(() => {
    getWindowDimensions()
  }, [])

  return (
    <>
      <Navbar expand="lg" style={{ padding: "0px" }}>
        <Container className='top-navbar-container'>
          <Navbar.Brand href="/" className='securitas-logo-top'>
            <a href="/" className='securitas-logo-href'>
              <img
                src={securitasLogo}
                width="118px"
                height="auto"
                className="d-inline-block align-top"
                alt="Securitas Technology Logo"
              />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='top-navbar' id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/kariyer"><a href="/kariyer">Kariyer</a></Nav.Link>
              <Nav.Link href="https://blog.securitastechnology.com.tr/"><a href="https://blog.securitastechnology.com.tr/">Blog</a></Nav.Link>
              <Nav.Link href="/haberler"><a href="/haberler">Haberler</a></Nav.Link>
              <Nav.Link href="/onarim-takibi"><a href="/onarim-takibi">Onarım Takibi</a></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Container className='self-bottom-container'>
          <Navbar.Brand href="#home" className='mobil-logo' >
            <a href="/">
              <img
                src={securitasLogobeyaz}
                width="118px"
                height="auto"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </a>
          </Navbar.Brand>
          <Navbar.Brand href="#home" style={{ marginTop: "20px" }} >
            <a href="/" className='securitas-logo-href'>
              <div style={{ width: "58px" }}>

              </div>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='bottom-navbar' id="basic-navbar-nav">
            <Nav>
              <NavDropdown className='cozumler-ve-hizmetler' onMouseLeave={() => setShowNavbarList(false)} onMouseEnter={navbarShown ? navbarList : null} title="Çözümler ve Hizmetler" id="basic-nav-dropdown">
                {navbar.map((item) => (
                  item.title !== "Temassız Görüntüleme Çözümleri" &&
                  <NavDropdown.Item href={item.full_url}>{item.title}</NavDropdown.Item>
                ))}
              </NavDropdown>
              <Nav.Link onMouseLeave={() => setShowSectorList(false)} onMouseEnter={() => setShowSectorList(true)} href="/sektorler">Sektörler</Nav.Link>
              <Nav.Link href="/neden-securitas-technology">Neden Securitas Technology</Nav.Link>
              <Nav.Link href="/basari-hikayeleri">Başarı Hikayeleri</Nav.Link>
              <Nav.Link className='mobile-topbar-item' href='/kariyer'>Kariyer</Nav.Link>
              <Nav.Link className='mobile-topbar-item' href='/blog'>Blog</Nav.Link>
              <Nav.Link className='mobile-topbar-item' href='/haberler'>Haberler</Nav.Link>
              <Nav.Link className='mobile-topbar-item' href='/onarim-takibi'>Onarım Takibi</Nav.Link>
            </Nav>
            <div className='d-flex bottom-navbar_icons align-items-center'>
              <div className='bottom-navbar_search'>
                <TbSearch onClick={navbarSearchHandler} style={{ cursor: "pointer" }} />
              </div>
              <div className='bottom-navbar_contact'>
                <button className='sec-purple-bg navbar-contact-button'><a href="/bize-ulasin" style={{ color: "white", textDecoration: "none" }}>Bize Ulaşın</a></button>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div onMouseEnter={() => setShowNavbarList(true)} onMouseLeave={() => setShowNavbarList(false)} className={showNavbarList ? 'navbar-list' : 'd-none'}>
        <div className="container">
          <div className="row">
            {navbar.map((item) => (
              item.title !== "Temassız Görüntüleme Çözümleri" &&
              <div className="col-4">
                <ul className='navbar-list_container'>
                  <h4><a href={item.full_url}>{item.title}</a></h4>
                  {item.children.map((list) => (
                    list.title !== "Temassız Görüntüleme Çözümleri" &&
                    <li><a href={`${item.full_url}/${list.slug}`}>{list.title}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div onMouseEnter={() => setShowSectorList(true)} onMouseLeave={() => setShowSectorList(false)} className={showSectorList ? 'navbar-list' : 'd-none'}>
        <div className="container">
          <div className="row">
            {sectors?.map((item) => (
              <div className="col-4">
                <ul className='navbar-list_container'>
                  <h4><a href={item.full_url}>{item.title}</a></h4>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={show ? 'navbar-searchbar' : 'd-none'}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className='search-container'>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <TbSearch />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Securitas Technology'de arayın"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                  />
                  <InputGroup.Text id="basic-addon1">
                    <BsXLg onClick={navbarSearchHandler} style={{ cursor: "pointer" }} />
                  </InputGroup.Text>
                </InputGroup>
                <ul className='search-container_result'>
                  <h4 className='sec-blue'>Hızlı Bağlantılar</h4>
                  {data.map((item) => (
                    <li><p className='sec-blue'> <a href={item.full_url}>{item.title}</a></p></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

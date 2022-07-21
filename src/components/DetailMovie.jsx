import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import tmdbIns from '../utility/tmdb'
import {
    Row,
    Col,
    Button,
    CardText,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    UncontrolledButtonDropdown
  } from 'reactstrap'

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/'
const LOADING_IMG_URL = 'https://c.tenor.com/aEjYE139N7wAAAAC/discord-loader.gif'

const DetailMovie = () => {

    const { movieId } = useParams()

    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(true)

    const fetchDetail = async () => {
        try {
            const fetchData = await tmdbIns.get(`movie/${movieId}`)
            setDetail(fetchData.data)
            console.log(fetchData.data)
        } catch (error) {
            console.log(error)
            setDetail({})
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        setLoading(true)
        fetchDetail()

        // fetchImages()
      
    }, [movieId])
    console.log(detail)
    console.log(loading)

    return (
        <Row className='my-2'>
            <Col className='d-flex align-items-center justify-content-center mb-2 mb-md-0' md='5' xs='12'>
                <div className='d-flex align-items-center justify-content-center'>
                <img className='img-fluid product-img' src={`${BASE_IMG_URL}${detail.backdrop_path}`}
                            alt={detail.title} />
                </div>
            </Col>
      <Col md='7' xs='12'>
        <h4>{detail.title}</h4>
        {/* <CardText tag='span' className='item-company'>
          By
          <a className='company-name' href='/' onClick={e => e.preventDefault()}>
            {data.brand}
          </a>
        </CardText> */}
        {/* <div className='ecommerce-details-price d-flex flex-wrap mt-1'>
          <h4 className='item-price me-1'>${data.price}</h4>
          <ul className='unstyled-list list-inline'>
            {new Array(5).fill().map((listItem, index) => {
              return (
                <li key={index} className='ratings-list-item me-25'>
                  <Star
                    className={classnames({
                      'filled-star': index + 1 <= data.rating,
                      'unfilled-star': index + 1 > data.rating
                    })}
                  />
                </li>
              )
            })}
          </ul>
        </div>
        <CardText>
          Available -<span className='text-success ms-25'>In stock</span>
        </CardText> */}
        <CardText>{detail.overview}</CardText> 
        {/* <ul className='product-features list-unstyled'>
          {data.hasFreeShipping ? (
            <li>
              <ShoppingCart size={19} />
              <span>Free Shipping</span>
            </li>
          ) : null}
          <li>
            <DollarSign size={19} />
            <span>EMI options available</span>
          </li>
        </ul> */}
        {/* <hr />
        <div className='product-color-options'>
          <h6>Colors</h6>
          <ul className='list-unstyled mb-0'>{renderColorOptions()}</ul>
        </div>
        <hr /> */}
        {/* <div className='d-flex flex-column flex-sm-row pt-1'>
          <Button
            tag={CartBtnTag}
            className='btn-cart me-0 me-sm-1 mb-1 mb-sm-0'
            color='primary'
            onClick={() => handleCartBtn(data.id, data.isInCart)}
            
            {...(data.isInCart
              ? {
                  to: '/apps/ecommerce/checkout'
                }
              : {})}
            
          >
            <ShoppingCart className='me-50' size={14} />
            {data.isInCart ? 'View in cart' : 'Move to cart'}
          </Button>
          <Button
            className='btn-wishlist me-0 me-sm-1 mb-1 mb-sm-0'
            color='secondary'
            outline
            onClick={() => handleWishlist(data.isInWishlist)}
          >
            <Heart
              size={14}
              className={classnames('me-50', {
                'text-danger': data.isInWishlist
              })}
            />
            <span>Wishlist</span>
          </Button>
          <UncontrolledButtonDropdown className='dropdown-icon-wrapper btn-share'>
            <DropdownToggle className='btn-icon hide-arrow' color='secondary' caret outline>
              <Share2 size={14} />
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem tag='a' href='/' onClick={e => e.preventDefault()}>
                <Facebook size={14} />
              </DropdownItem>
              <DropdownItem tag='a' href='/' onClick={e => e.preventDefault()}>
                <Twitter size={14} />
              </DropdownItem>
              <DropdownItem tag='a' href='/' onClick={e => e.preventDefault()}>
                <Youtube size={14} />
              </DropdownItem>
              <DropdownItem tag='a' href='/' onClick={e => e.preventDefault()}>
                <Instagram size={14} />
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </div> */}
      </Col>
    </Row>
    )
}

export default DetailMovie
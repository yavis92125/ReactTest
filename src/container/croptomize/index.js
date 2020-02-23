import React, { Fragment } from 'react'
import {
  Row, Col, Button, Badge
} from 'reactstrap'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faDollarSign,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import * as global from '../../consts/global'

function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  return global.marks.findIndex(mark => mark.value === value) + 1;
}

class Croptomize extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slider_max: 50,
      no_of_seat: 5,
    }
  }

  // change slider value
  onChangeSlider = (e, newValue) => {
    this.setState({
      no_of_seat: newValue
    })
  }

  render() {
    let {
      slider_max,
        no_of_seat,
    } = this.state

    return (
      <Fragment>
        <Row>
          <Col sm={12} md={{size: 6, offset: 3}} lg={{size: 4, offset: 4}}>

            {/* croptomize header */}
            <div className={'text-center bg-main'}>
              <FontAwesomeIcon className={'mt-4 dollar-mark'} icon={faDollarSign} />

              <div className={'mt-3 croptomize-text-500'} >
                Croptomize
                <Badge color={'info'}>
                  PRO
                </Badge>
              </div>

              <span className={'croptomize-text-700'} >
                <FontAwesomeIcon className={'dollar-font mt-4'} icon={faDollarSign}/>
                {no_of_seat}
              </span>
              <span className={'croptomize-text-500'}> /month</span>
            </div>

            {/* slider */}
            <div className={'text-center slider-panel'}>
              <Typography className={'pt-3'} id="discrete-slider-custom" gutterBottom>
                Number of Seats
              </Typography>
              <Slider
                className={'mr-2 ml-2'}
                style={{width: '90%'}}
                defaultValue={5}
                valueLabelFormat={valueLabelFormat}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-restrict"
                step={null}
                onChange={this.onChangeSlider}
                marks={global.marks}
                max={slider_max}
              />
            </div>

            {/* purchase button */}
            <div className={'text-center mt-3'}>
              <Button color={'warning'} size={'lg'} className={'pillow-lg-btn'}>Purchase</Button>
            </div>

            {/* page content */}
            <div className={'ml-3 mt-3'}>
              <h4>iOS App Features Include:</h4>
            </div>

            {global.gContentList.map(content =>
              <div className={'row mt-3 text-line'}>
                <span className={'w-10p'}>
                  <FontAwesomeIcon icon={faCheck} className={'text-check'}/>
                </span>
                <span className={'w-90p'}>
                  { content }
                </span>
              </div>
            )}
          </Col>
        </Row>
      </Fragment>
    )
  }
}

export default Croptomize
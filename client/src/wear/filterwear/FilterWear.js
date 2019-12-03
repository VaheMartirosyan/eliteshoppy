import React, {Component} from 'react'
import './FilterWear.scss'
import InsideFilter from "./insidefilter/InsideFilter";
import Checkboxes from "./checkboxes/Checkboxes";
import Compare from "./compare/Compare";
import Colections from "./colections/Colections";
import Sliderfitler from './sliderfilter/Sliderfilter'


export default class FilterWear extends Component {
    state = {
        isVisible: false,
        ethnicIsVisible: false,
        shoesIsVisible: false,
        capIsVisible: false,
        checked: false,
        weartypeone: ['Clothing','Wallets','Footwear','Watches','Accessories','Bags','Caps & Hats'],
        weartypetwo: ['Jewellery','Sunglasses','Parfumes','Beauty','Shirts','Sunglasses','Swimwear'],
        weartypethree: ['Caps', 'SunGlasses', 'Shoes'],
        weartypefour: ['SunGlasses', 'SunGlasses', 'Pants', 'Trousers'],
        checktwo: false,
        checkthree: false,
        checkfour: false,
        checkfive: false,
        genderone: 'mens',
        gendertwo: 'womens',
        value: 5,
        value1: {
            min: 5,
            max: 10,
        },
        inpVal: 50
    }

    changerange = (e) => {
        this.setState({
            inpVal: e.target.value
        })
    }
    klor=()=>{

    }
  
    render() {
        return(
            <div>
                <div className="container">
                    <div className="filter">
                        <div className={'price'}>
                            <div className={'byprice'}>
                                <h2> FILTER BY <span>PRICE</span> </h2>
                            </div>
                            <div className={'range'}>
                                <input type="range" onChange={this.changerange} />
                                <input type="text" value={`$ ${this.state.inpVal}`} onChange={this.klor} className={'between'}/>
                            </div>
                            <div className="categories">
                                <div className={'categorieswear'}>
                                    <h3>CATEGORIES</h3>
                                </div>
                                <div className={'contain'}>
                                    <div onClick={()=> this.setState({isVisible: !this.state.isVisible})}>
                                        <i className="fa fa-long-arrow-right"></i> <span>{this.props.mensorw} Wear</span>
                                    </div>
                                    {this.state.isVisible ? <div className={'ethnic'}>
                                        <div onClick={()=> this.setState({ethnicIsVisible: !this.state.ethnicIsVisible })}>

                                            <i className="fa fa-long-arrow-right"></i> <span>Ethnic Wear</span>
                                        </div>
                                        {this.state.ethnicIsVisible ? this.state.weartypeone.map((e, i) => {
                                            return(
                                                <div className={'ethnicwear'} key={i}>
                                                    <InsideFilter weartype={e} gender={this.props.gender} />
                                                </div>
                                            )
                                        }) : null}
                                        <div onClick={()=>this.setState({capIsVisible: !this.state.capIsVisible})}>
                                            <i className="fa fa-long-arrow-right"></i> <span>Party Wear</span>
                                        </div>
                                        {this.state.capIsVisible ? this.state.weartypeone.map((e, i) => {
                                            return(
                                                <div className={'ethnicwear'} key={i}>
                                                    <InsideFilter weartype={e}  gender={this.props.gender} />
                                                </div>
                                            )
                                        }) : null}
                                        <div onClick={()=> this.setState({ shoesIsVisible: !this.state.shoesIsVisible })}>
                                            <i className="fa fa-long-arrow-right"></i> <span>Casual Wear</span>
                                        </div>
                                        {this.state.shoesIsVisible ? this.state.weartypeone.map((e, i) => {
                                            return(
                                                <div className={'ethnicwear'} key={i}>
                                                    <InsideFilter weartype={e} gender={this.props.gender}  />
                                                </div>
                                            )
                                        }) : null}
                                    </div> : null}
                                    <div onClick={()=> this.setState({  offerIsVisible: !this.state.offerIsVisible })}>
                                        <i className="fa fa-long-arrow-right"></i> <span>Best Offers</span>
                                    </div>
                                    {this.state.offerIsVisible ? <div className={'ethnic'}>
                                        <div onClick={()=> this.setState({ arrivalIsVisible: !this.state.arrivalIsVisible })}>
                                            <i className="fa fa-long-arrow-right"></i> <span>Summer Sales</span>
                                        </div>
                                        {this.state.summer ? this.state.weartypefour.map((e, i) => {
                                            return(
                                                <div className={'ethnicwear'} key={i}>
                                                    <InsideFilter weartype={e} gender={this.props.gender}  />
                                                </div>
                                            )
                                        }) : null}
                                        <div onClick={()=> this.setState({   flatIsVisible: !this.state.flatIsVisible })}>
                                            <i className="fa fa-long-arrow-right"></i> <span>Flat</span>
                                        </div>
                                        {this.state.flatIsVisible ? this.state.weartypethree.map((e, i) => {
                                            return(
                                                <div className={'ethnicwear'} key={i}>
                                                    <InsideFilter weartype={e} gender={this.props.gender}  />
                                                </div>
                                            )
                                        }) : null}
                                    </div> : null}
                                </div>
                            </div>
                            <div className="community">
                                <div className={'communitypoll'}>
                                    <h3>COMMUNITY POLL</h3>
                                </div>
                                <div className={'checkboxes'}>
                                    <Checkboxes clickcheck={this.clickCheck}
                                                checked={this.state.checked}
                                                checkedtwo={this.state.checktwo}
                                                checkedthree={this.state.checkthree}
                                                checkedfour={this.state.checkfour}
                                                checkedfive={this.state.checkfive}
                                                clickchecktwo={()=>this.setState({ checked: !this.state.checked})}
                                                clickcheckthree={()=> this.setState({checkthree: !this.state.checkthree})}
                                                clickcheckfour={()=>this.setState({ checkfour: !this.state.checkfour })}
                                                clickcheckfive={()=> this.setState({  checkfive: !this.state.checkfive })}
                                                getProduct={this.props.getProduct}
                                                lower={this.props.lower}
                                                track={this.props.track}
                                                bigger={this.props.bigger}
                                                colors={this.props.colors}
                                                backmoney={this.props.backmoney}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={'compare'}>
                            <div className={'bycompare'}>
                                <h2> PRODUCT  <span>COMPARE(0)</span> </h2>
                            </div>
                            <div className="slidefilter">
                                <Compare />
                                <Sliderfitler />
                                <Colections colect={this.props.colect} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
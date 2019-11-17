import React, {Component} from 'react'
import './FilterWear.scss'
import InsideFilter from "./insidefilter/InsideFilter";
import Checkboxes from "./checkboxes/Checkboxes";


export default class FilterWear extends Component {
    state = {
        isVisible: false,
        ethnicIsVisible: false,
        shoesIsVisible: false,
        capIsVisible: false,
        checked: false,
        weartypeone: ['Shirts', 'Caps', 'Shoes', 'Pants', 'SunGlasses', 'Trousers'],
        weartypetwo: ['Caps', 'Shoes', 'SunGlasses', 'Trousers'],
        weartypethree: ['Caps', 'SunGlasses', 'Shoes'],
        weartypefour: ['SunGlasses', 'SunGlasses', 'Pants', 'Trousers'],
        checktwo: false,
        checkthree: false,
        checkfour: false,
        checkfive: false,
    }

    showMensCollection = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
}
    showEthnic = () => {
        this.setState({
            ethnicIsVisible: !this.state.ethnicIsVisible
        })
    }
    showShoes = () => {
        this.setState({
            shoesIsVisible: !this.state.shoesIsVisible
        })
    }
    showCaps = () => {
        this.setState({
            capIsVisible: !this.state.capIsVisible
        })
    }
    showGlasses = () => {
        this.setState({
            arrivalIsVisible: !this.state.arrivalIsVisible
        })
    }
    showoffer = () => {
        this.setState({
            offerIsVisible: !this.state.offerIsVisible
        })
    }
    showGlasses = () => {
        this.setState({
            summer: !this.state.summer
        })
    }
    showFlat = () => {
        this.setState({
            flatIsVisible: !this.state.flatIsVisible
        })
    }
    clickCheck = () => {
        this.setState({
            checked: !this.state.checked
        })
    }
    clickCheckTwo = () => {
        this.setState({
            checktwo: !this.state.checktwo
        })
    }
    clickCheckThree = () => {
        this.setState({
            checkthree: !this.state.checkthree
        })
    }
    clickCheckFour = () => {
        this.setState({
            checkfour: !this.state.checkfour
        })
    }

    clickCheckFive = () => {
        this.setState({
            checkfive: !this.state.checkfive
        })
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
                                <input type="range"/>
                                <input type="text" value={'$ 100 - $ 700'} className={'between'}/>
                            </div>
                            <div className="categories">
                                <div className={'categorieswear'}>
                                    <h3>CATEGORIES</h3>
                                </div>
                                <div className={'contain'}>
                                    <div onClick={this.showMensCollection}>
                                        <i className="fa fa-long-arrow-right"></i> <span>Men's Wear</span>
                                    </div>
                                    {this.state.isVisible ? <div className={'ethnic'}>
                                        <div onClick={this.showEthnic}>
                                            <i className="fa fa-long-arrow-right"></i> <span>Ethnic Wear</span>
                                        </div>
                                        {this.state.ethnicIsVisible ? this.state.weartypeone.map((e, i) => {
                                            return(
                                                <div className={'ethnicwear'} key={i}>
                                                    <InsideFilter weartype={e} />
                                                </div>
                                            )
                                        }) : null}
                                        <div onClick={this.showCaps}>
                                            <i className="fa fa-long-arrow-right"></i> <span>Party Wear</span>
                                        </div>
                                        {this.state.capIsVisible ? this.state.weartypeone.map((e, i) => {
                                            return(
                                                <div className={'ethnicwear'} key={i}>
                                                    <InsideFilter weartype={e} />
                                                </div>
                                            )
                                        }) : null}
                                        <div onClick={this.showShoes}>
                                            <i className="fa fa-long-arrow-right"></i> <span>Casual Wear</span>
                                        </div>
                                        {this.state.shoesIsVisible ? this.state.weartypeone.map((e, i) => {
                                            return(
                                                <div className={'ethnicwear'} key={i}>
                                                    <InsideFilter weartype={e} />
                                                </div>
                                            )
                                        }) : null}
                                    </div> : null}
                                    <div onClick={this.showoffer}>
                                        <i className="fa fa-long-arrow-right"></i> <span>Best Offers</span>
                                    </div>
                                    {this.state.offerIsVisible ? <div className={'ethnic'}>
                                        <div onClick={this.showGlasses}>
                                            <i className="fa fa-long-arrow-right"></i> <span>Summer Sales</span>
                                        </div>
                                        {this.state.summer ? this.state.weartypefour.map((e, i) => {
                                            return(
                                                <div className={'ethnicwear'} key={i}>
                                                    <InsideFilter weartype={e} />
                                                </div>
                                            )
                                        }) : null}
                                        <div onClick={this.showFlat}>
                                            <i className="fa fa-long-arrow-right"></i> <span>Flat</span>
                                        </div>
                                        {this.state.flatIsVisible ? this.state.weartypethree.map((e, i) => {
                                            return(
                                                <div className={'ethnicwear'} key={i}>
                                                    <InsideFilter weartype={e} />
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
                                                clickchecktwo={this.clickCheckTwo}
                                                clickcheckthree={this.clickCheckThree}
                                                clickcheckfour={this.clickCheckFour}
                                                clickcheckfive={this.clickCheckFive}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={'compare'}>
                            <div className={'bycompare'}>
                                <h2> PRODUCT  <span>COMPARE(0)</span> </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
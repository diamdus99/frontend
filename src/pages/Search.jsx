import React, { useContext, useState } from 'react';
import { Input, Button } from '@windmill/react-ui';

//internal import

import { SidebarContext } from '@/context/SidebarContext';
import SettingServices from '@/services/SettingServices';
import SearchShape from '@/components/search/SearchShape';

import useSearchSubmit from '@/hooks/useSearchSubmit';
import SearchCarat from '@/components/search/SearchCarat';
import SearchColor from '@/components/search/SearchColor';

import ProductDisplay from '@/components/search/ProductDisplay';
import ProductList from '@/components/search/ProductList';
import ProductServices from '@/services/ProductServices';
import useAsync from '@/hooks/useAsync';
import Cookies from 'js-cookie';

const Search = () => {
  const { toggleSidebar, setNavBar } = useContext(SidebarContext);
  const [isNaturalDiamond, setisNaturalDiamond] = useState(false);
  const [showProduct, setshowProduct] = useState('search');
  const { data: globalSetting } = useAsync(SettingServices.getGlobalSetting);

  React.useEffect(() => {
    // const test = Cookies.get('adminInfo');
    // console.log(JSON.parse(test).role);
    setNavBar(false);
    toggleSidebar;
  }, []);
  const { data, loading, error } = useAsync(() =>
    ProductServices.getAllDiamonds({})
  );
  const [shapeArray, setshapeArray] = useState([
    { shape: 'Round', isShown: true },
    { shape: 'Princess', isShown: true },
    { shape: 'Asscher', isShown: true },
    { shape: 'Emerand', isShown: true },
    { shape: 'Heart', isShown: true },
    { shape: 'Marquise', isShown: true },
    { shape: 'Oval', isShown: true },
    { shape: 'Pear', isShown: true },
    { shape: 'Cushions', isShown: true },
    { shape: 'Radiant', isShown: true },
    { shape: 'SqRadiant', isShown: true },
    { shape: 'Trilliant', isShown: true },
    { shape: 'Baguette', isShown: true },
    { shape: 'Others', isShown: true },
  ]);
  const [caratArray, setcaratArray] = useState([
    { carat: '0.30 - 0.39', isShown: true },
    { carat: '0.40 - 0.49', isShown: true },
    { carat: '0.50 - 0.59', isShown: true },
    { carat: '0.60 - 0.69', isShown: true },
    { carat: '0.70 - 0.89', isShown: true },
    { carat: '0.90 - 0.99', isShown: true },
    { carat: '1.00 - 1.49', isShown: true },
    { carat: '1.50 - 1.99', isShown: true },
    { carat: '2.00 - 2.99', isShown: true },
    { carat: '3.00 - 3.99', isShown: true },
    { carat: '4.00 - 29.99', isShown: true },
  ]);
  const [colorArray, setcolorArray] = useState([
    { color: 'D', isShown: true },
    { color: 'E', isShown: true },
    { color: 'F', isShown: true },
    { color: 'G', isShown: true },
    { color: 'H', isShown: true },
    { color: 'I', isShown: true },
    { color: 'J', isShown: true },
    { color: 'K', isShown: true },
    { color: 'L', isShown: true },
    { color: 'M', isShown: true },
    { color: 'N', isShown: true },
    { color: 'O-P', isShown: true },
    { color: 'Q-R', isShown: true },
    { color: 'S-T', isShown: true },
    { color: 'U-V', isShown: true },
    { color: 'W-X', isShown: true },
    { color: 'Y-Z', isShown: true },
  ]);
  const { handleSubmit, onSubmit } = useSearchSubmit(
    isNaturalDiamond,
    shapeArray,
    caratArray,
    colorArray
  );

  const onclickSubmitButton = () => {
    setshowProduct('productlist');
    // setshowProductList(true);
  };
  // Function to save or update the array
  const saveOrUpdateshapeArray = (newshapeArray) => {
    // Check if the shapeArray already has elements
    if (shapeArray.length > 0) {
      const updatedArray = shapeArray.map((obj) => {
        const matchingObject = newshapeArray.find(
          (newObj) => newObj.shape === obj.shape
        );
        if (matchingObject) {
          return { ...obj, isShown: matchingObject.isShown };
        }
        return obj;
      });
      setshapeArray(updatedArray);
    } else {
      // shapeArray does not exist, save the newshapeArray
      setshapeArray(newshapeArray);
    }
  };

  // Usage example: call saveOrUpdateshapeArray with your object array data
  const handleSaveshapeArray = (e, f) => {
    const newArray = [{ shape: f, isShown: e }]; // Example object array data
    saveOrUpdateshapeArray(newArray);
  };

  const saveOrUpdatecaratArray = (newscaratArray) => {
    // Check if the shapeArray already has elements
    if (shapeArray.length > 0) {
      const updatedArray = caratArray.map((obj) => {
        const matchingObject = newscaratArray.find(
          (newObj) => newObj.carat === obj.carat
        );
        if (matchingObject) {
          return { ...obj, isShown: matchingObject.isShown };
        }
        return obj;
      });
      setcaratArray(updatedArray);
    } else {
      // shapeArray does not exist, save the newshapeArray
      setcaratArray(newscaratArray);
    }
  };

  // Usage example: call saveOrUpdateshapeArray with your object array data
  const handleSavecaratArray = (e, f) => {
    const newArray = [{ carat: f, isShown: e }]; // Example object array data
    saveOrUpdatecaratArray(newArray);
  };

  // color
  const saveOrUpdatecolorArray = (newscolorArray) => {
    // Check if the shapeArray already has elements
    if (shapeArray.length > 0) {
      const updatedArray = colorArray.map((obj) => {
        const matchingObject = newscolorArray.find(
          (newObj) => newObj.color === obj.color
        );
        if (matchingObject) {
          return { ...obj, isShown: matchingObject.isShown };
        }
        return obj;
      });
      setcolorArray(updatedArray);
    } else {
      // shapeArray does not exist, save the newshapeArray
      setcolorArray(newscolorArray);
    }
  };

  // Usage example: call saveOrUpdateshapeArray with your object array data
  const handleSaveccolorArray = (e, f) => {
    const newArray = [{ color: f, isShown: e }]; // Example object array data
    saveOrUpdatecolorArray(newArray);
  };

  const onButton = () => {};
  return (
    <>
      {showProduct === 'search' ? (
        <>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4">
                <Button
                  onClick={() => {
                    setisNaturalDiamond(true);

                    // setisNaturalDiamon(true);
                  }}
                  className={`${
                    isNaturalDiamond
                      ? 'bg-blue-950 text-white '
                      : 'bg-white  text-blue-950'
                  } rounded-e-none`}
                >
                  Natural Diamonds
                </Button>
                <Button
                  onClick={() => {
                    setisNaturalDiamond(false);
                  }}
                  className={`${
                    isNaturalDiamond
                      ? 'bg-white  text-blue-950 border-gray-950 border hover:text-white'
                      : 'bg-blue-950 text-white'
                  } rounded-s-none text-black`}
                >
                  Lab Grown Diamond
                </Button>
              </div>
              <p className="mt-4 mb-4 font-semibold text-gray-600 dark:text-gray-300">
                Shape
              </p>
              <div className="grid gap-4 md:grid-cols-4 xl:grid-cols-12 lg:grid-cols-6 ">
                <SearchShape
                  selected={(e, f) => handleSaveshapeArray(e, f)}
                  name="Round"
                  selectDiamond="/diamond-round.png"
                  unSelectDiamond="diamond-round-white.png"
                />

                <SearchShape
                  selected={(e, f) => handleSaveshapeArray(e, f)}
                  name="Princess"
                  selectDiamond="/diamond_cushion.png"
                  unSelectDiamond="diamond_cushion-white.png"
                />

                <SearchShape
                  selected={(e, f) => handleSaveshapeArray(e, f)}
                  name="Asscher"
                  selectDiamond="/asscher.png"
                  unSelectDiamond="asscher-white.png"
                />

                <SearchShape
                  selected={(e, f) => handleSaveshapeArray(e, f)}
                  name="Emerand"
                  selectDiamond="/emerald.png"
                  unSelectDiamond="emerald-white.png"
                />
                <SearchShape
                  selected={(e, f) => handleSaveshapeArray(e, f)}
                  name="Heart"
                  selectDiamond="/heart.png"
                  unSelectDiamond="heart-white.png"
                />
                <SearchShape
                  selected={(e, f) => handleSaveshapeArray(e, f)}
                  name="Marquise"
                  selectDiamond="/marquise.png"
                  unSelectDiamond="marquise-white.png"
                />

                <SearchShape
                  selected={(e, f) => handleSaveshapeArray(e, f)}
                  name="Oval"
                  selectDiamond="/oval.png"
                  unSelectDiamond="oval-white.png"
                />

                <SearchShape
                  selected={(e, f) => handleSaveshapeArray(e, f)}
                  name="Pear"
                  selectDiamond="/pear.png"
                  unSelectDiamond="pear-white.png"
                />

                <SearchShape
                  selected={(e, f) => handleSaveshapeArray(e, f)}
                  name="Cushions"
                  selectDiamond="/cushions.png"
                  unSelectDiamond="/cushions-white.png"
                />

                <SearchShape
                  selected={(e, f) => handleSaveshapeArray(e, f)}
                  name="Radiant"
                  selectDiamond="/raidiant.png"
                  unSelectDiamond="raidiant-white.png"
                />
                <SearchShape
                  selected={(e, f) => handleSaveshapeArray(e, f)}
                  name="SqRadiant"
                  selectDiamond="/asscher.png"
                  unSelectDiamond="asscher-white.png"
                />
                <SearchShape
                  selected={(e, f) => handleSaveshapeArray(e, f)}
                  name="Trilliant"
                  unSelectDiamond="/Trilliant-white.png"
                  selectDiamond="/Trilliant.png"
                />
                <SearchShape
                  selected={(e, f) => handleSaveshapeArray(e, f)}
                  name="Baguette"
                  selectDiamond="/baguette.png"
                  unSelectDiamond="/baguette-white.png"
                />
                <SearchShape
                  selected={(e, f) => handleSaveshapeArray(e, f)}
                  name="Others"
                  unSelectDiamond="other-white.png"
                  selectDiamond="/other.png"
                />
              </div>
              <p className="mt-4 mb-4 font-semibold text-gray-600 dark:text-gray-300">
                Carat
              </p>
              <div className="  ">
                {/* <div className="grid gap-2 md:grid-cols-4 xl:grid-cols-6 lg:grid-cols-8 "> */}
                <SearchCarat
                  name="0.30 - 0.39"
                  selected={(e, f) => handleSavecaratArray(e, f)}
                />
                <SearchCarat
                  selected={(e, f) => handleSavecaratArray(e, f)}
                  name="0.40 - 0.49"
                />
                <SearchCarat
                  selected={(e, f) => handleSavecaratArray(e, f)}
                  name="0.50 - 0.59"
                />
                <SearchCarat
                  selected={(e, f) => handleSavecaratArray(e, f)}
                  name="0.60 - 0.69"
                />
                <SearchCarat
                  selected={(e, f) => handleSavecaratArray(e, f)}
                  name="0.70 - 0.89"
                />
                <SearchCarat
                  selected={(e, f) => handleSavecaratArray(e, f)}
                  name="0.90 - 0.99"
                />
                <SearchCarat
                  selected={(e, f) => handleSavecaratArray(e, f)}
                  name="1.00 - 1.49"
                />
                <SearchCarat
                  selected={(e, f) => handleSavecaratArray(e, f)}
                  name="1.50 - 1.99"
                />
                <SearchCarat
                  selected={(e, f) => handleSavecaratArray(e, f)}
                  name="2.00 - 2.99"
                />
                <SearchCarat
                  selected={(e, f) => handleSavecaratArray(e, f)}
                  name="3.00 - 3.99"
                />
                <SearchCarat
                  selected={(e, f) => handleSavecaratArray(e, f)}
                  name="4.00 - 29.99"
                />
              </div>
              <p className="mt-4 mb-4 font-semibold text-gray-600 dark:text-gray-300">
                Color
              </p>
              <div>
                <SearchColor
                  name="D"
                  selected={(e, f) => handleSaveccolorArray(e, f)}
                />
                <SearchColor
                  selected={(e, f) => handleSaveccolorArray(e, f)}
                  name="E"
                />
                <SearchColor
                  selected={(e, f) => handleSaveccolorArray(e, f)}
                  name="F"
                />
                <SearchColor
                  selected={(e, f) => handleSaveccolorArray(e, f)}
                  name="G"
                />
                <SearchColor
                  selected={(e, f) => handleSaveccolorArray(e, f)}
                  name="H"
                />
                <SearchColor
                  selected={(e, f) => handleSaveccolorArray(e, f)}
                  name="I"
                />
                <SearchColor
                  selected={(e, f) => handleSaveccolorArray(e, f)}
                  name="J"
                />
                <SearchColor
                  selected={(e, f) => handleSaveccolorArray(e, f)}
                  name="K"
                />
                <SearchColor
                  selected={(e, f) => handleSaveccolorArray(e, f)}
                  name="L"
                />
                <SearchColor
                  selected={(e, f) => handleSaveccolorArray(e, f)}
                  name="M"
                />
                <SearchColor
                  selected={(e, f) => handleSaveccolorArray(e, f)}
                  name="N"
                />
                <SearchColor
                  selected={(e, f) => handleSaveccolorArray(e, f)}
                  name="O-P"
                />
                <SearchColor
                  selected={(e, f) => handleSaveccolorArray(e, f)}
                  name="Q-R"
                />
                <SearchColor
                  selected={(e, f) => handleSaveccolorArray(e, f)}
                  name="S-T"
                />
                <SearchColor
                  selected={(e, f) => handleSaveccolorArray(e, f)}
                  name="U-V"
                />
                <SearchColor
                  selected={(e, f) => handleSaveccolorArray(e, f)}
                  name="W-X"
                />
                <SearchColor
                  selected={(e, f) => handleSaveccolorArray(e, f)}
                  name="Y-Z"
                />
              </div>
              <div className="xl:flex xl:flex-row xl:justify-between">
                <div>
                  <p className="mt-4 mb-4 font-semibold text-gray-600 dark:text-gray-300">
                    Clarity
                  </p>
                  <div>
                    <SearchColor name="FL" />
                    <SearchColor name="FL" />
                    <SearchColor name="VVS1" />
                    <SearchColor name="VVS2" />
                    <SearchColor name="VS1" />
                    <SearchColor name="VS2" />
                    <SearchColor name="SI1" />
                    <SearchColor name="SI2" />
                    <SearchColor name="I1" />
                    <SearchColor name="I2" />
                    <SearchColor name="I3" />
                  </div>
                </div>
                <div>
                  <p className="mt-4 mb-4 font-semibold text-gray-600 dark:text-gray-300">
                    Growth Treatment
                  </p>
                  <div>
                    <SearchColor name="CVD" />
                    <SearchColor name="HPTH" />
                    <SearchColor name="OTHER" />
                  </div>
                </div>
              </div>
              <div className="xl:flex xl:flex-row xl:justify-between mt-3">
                <div>
                  <p className="mt-4 mb-4 font-semibold text-gray-600 dark:text-gray-300">
                    Shortcut
                  </p>
                  <div>
                    <SearchColor name="3EX" />
                    <SearchColor name="3EX NON" />
                    <SearchColor name="NO BGM" />
                    <SearchColor name="H&A" />
                  </div>
                </div>
                <div>
                  <p className="mt-4 mb-4 font-semibold text-gray-600 dark:text-gray-300">
                    Polish
                  </p>
                  <div>
                    <SearchColor name="EX" />
                    <SearchColor name="VG" />
                    <SearchColor name="GD" />
                    <SearchColor name="FR" />
                  </div>
                </div>
                <div>
                  <p className="mt-4 mb-4 font-semibold text-gray-600 dark:text-gray-300">
                    Symmetry
                  </p>
                  <div>
                    <SearchColor name="EX" />
                    <SearchColor name="VG" />
                    <SearchColor name="GD" />
                    <SearchColor name="FR" />
                  </div>
                </div>
              </div>
              <div>
                <p className="mt-4 mb-4 font-semibold text-gray-600 dark:text-gray-300">
                  Cut
                </p>
                <div>
                  <SearchColor name="ID" />
                  <SearchColor name="EX" />
                  <SearchColor name="VG" />
                  <SearchColor name="GD" />
                  <SearchColor name="FR" />
                </div>
              </div>
              <div className="xl:flex xl:flex-row xl:justify-between">
                <div>
                  <p className="mt-4 mb-4 font-semibold text-gray-600 dark:text-gray-300">
                    Fluorescence
                  </p>
                  <div>
                    <SearchColor name="NONE" />
                    <SearchColor name="FAINT" />
                    <SearchColor name="MEDUIM" />
                    <SearchColor name="SLIGHT" />
                    <SearchColor name="STRONG" />
                    <SearchColor name="V.STRONG" />
                  </div>
                </div>
                <div>
                  <p className="mt-4 mb-4 font-semibold text-gray-600 dark:text-gray-300">
                    Lab
                  </p>
                  <div>
                    <SearchColor name="GIA" />
                    <SearchColor name="IGI" />
                    <SearchColor name="HRD" />
                    <SearchColor name="GCL" />
                    <SearchColor name="STRONG" />
                    <SearchColor name="V.STRONG" />
                  </div>
                </div>
                <div>
                  <p className="mt-4 mb-4 font-semibold text-gray-600 dark:text-gray-300">
                    Eye Clean
                  </p>
                  <div>
                    <SearchColor name="Yes" />
                    <SearchColor name="No" />
                  </div>
                </div>
              </div>
              <div className="xl:flex xl:flex-row xl:justify-between mt-3">
                <div>
                  <p className="mt-4 mb-4 font-semibold text-gray-600 dark:text-gray-300">
                    Country
                  </p>
                  <div className="grid auto-cols-auto grid-flow-col  justify-start ">
                    <SearchColor name="India" />
                    <SearchColor name="USA" />
                    <SearchColor name="HK" />
                    <SearchColor name="UK" />
                    <SearchColor name="Israel" />
                    <SearchColor name="Belgium" />
                  </div>
                </div>
                <div>
                  <p className="mt-4 mb-4 font-semibold text-gray-600 dark:text-gray-300">
                    Brown
                  </p>
                  <div className="grid auto-cols-auto grid-flow-col  justify-start ">
                    <SearchColor name="None" />
                    <SearchColor name="Brown" />
                  </div>
                </div>
                <div>
                  <p className="mt-4 mb-4 font-semibold text-gray-600 dark:text-gray-300">
                    Green
                  </p>
                  <div className="grid auto-cols-auto grid-flow-col  justify-start ">
                    <SearchColor name="None" />
                    <SearchColor name="Green" />
                  </div>
                </div>
                <div>
                  <p className="mt-4 mb-4 font-semibold text-gray-600 dark:text-gray-300">
                    Milky
                  </p>
                  <div className="grid auto-cols-auto grid-flow-col  justify-start ">
                    <SearchColor name="Milky" />
                    <SearchColor name="No Milky" />
                  </div>
                </div>
              </div>

              <div className="xl:flex xl:flex-row xl:justify-between mt-3">
                <div>
                  <p className="mt-4 mb-4 font-semibold text-gray-600 dark:text-gray-300">
                    Table (%)
                  </p>
                  <div className="grid xl:grid-cols-2 grid-flow-col gap-3 justify-start ">
                    <Input
                      className=""
                      placeholder="From"
                      onChange={(e) => {
                        console.lof(e);
                      }}
                    />
                    <Input className="" placeholder="To" />
                  </div>
                </div>
                <div>
                  <p className="mt-4 mb-4 font-semibold text-gray-600 dark:text-gray-300">
                    Table (%)
                  </p>
                  <div className="grid xl:grid-cols-2 grid-flow-col gap-3 justify-start ">
                    <Input
                      className=""
                      placeholder="From"
                      onChange={(e) => {
                        console.lof(e);
                      }}
                    />
                    <Input className="" placeholder="To" />
                  </div>
                </div>
                <div>
                  <p className="mt-4 mb-4 font-semibold text-gray-600 dark:text-gray-300">
                    Table (%)
                  </p>
                  <div className="grid xl:grid-cols-2 grid-flow-col gap-3 justify-start ">
                    <Input
                      className=""
                      placeholder="From"
                      onChange={(e) => {
                        console.lof(e);
                      }}
                    />
                    <Input className="" placeholder="To" />
                  </div>
                </div>
                <div>
                  <p className="mt-4 mb-4 font-semibold text-gray-600 dark:text-gray-300">
                    Table (%)
                  </p>
                  <div className="grid xl:grid-cols-2 grid-flow-col gap-3 justify-start ">
                    <Input
                      className=""
                      placeholder="From"
                      onChange={(e) => {
                        console.lof(e);
                      }}
                    />
                    <Input className="" placeholder="To" />
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-4 mb-4 ">
                <Button
                  onClick={onclickSubmitButton}
                  className="text-white"
                  type="submit"
                >
                  Submit
                </Button>
                <Button>Reset</Button>
              </div>
            </form>
          </div>
        </>
      ) : showProduct === 'productlist' ? (
        <ProductList data={data} loading={loading} error={error} />
      ) : (
        <ProductDisplay />
      )}
    </>
  );
};

export default Search;

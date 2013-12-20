

// ---> Navigation Bar .....................................................

	// ---> Mens ..........................................................

		$(".nav.dept.mens").mouseenter(function(){

			$(".nav.dept").removeClass("hidden");
			$(this).addClass("hidden");

			$(".nav.menu.mens")       .show();
			$(".nav.menu.womens")     .hide();
			$(".nav.menu.accessories").hide();
		});

	// ---> Womens ........................................................

		$(".nav.dept.womens").mouseenter(function(){

			$(".nav.dept").removeClass("hidden");
			$(this).addClass("hidden");

			$(".nav.menu.mens")       .hide();
			$(".nav.menu.womens")     .show();
			$(".nav.menu.accessories").hide();
		});

	// ---> Accessories ....................................................
		
		$(".nav.dept.accessories").mouseenter(function(){

			$(".nav.dept").removeClass("hidden");
			$(this).addClass("hidden");
			
			$(".nav.menu.mens")       .hide();
			$(".nav.menu.womens")     .hide();
			$(".nav.menu.accessories").show();	
		});

	 // ---> Reset Nav .....................................................

		$(".nav.container").mouseleave(function(){
			$(".nav.dept").removeClass("hidden");
			$(".nav.menu")       .hide();
		});	

	// ---> To View Pics Click Menu Category ...............................

		$("#navContainer").on("click",".category",function(){
			var dept = $(this).data("dept");
			var cat = $(this).data("category");

			$('.category').removeClass('active');
			$(this).addClass('active');

			$("#imgContainer img").each(function( index ){
            	$this = $(this);

            	var imgLink = products[dept][cat][index][0];
            	$this.attr("src", imgLink);
        	});

        	$("#imgContainer").slideDown();
        	$("#infoContainer").slideUp();
        	$("#footerContainer").css("border-top", "solid white 1px");
		})


// ---> Info Container .....................................................

	// about ........................................................

		$(".footer.left.about").click(function(){
			$("#about")  .show();
			$("#faq")    .hide();
			$("#contact").hide();

			$("#infoContainer").slideDown();
			$("#imgContainer").slideUp();
        	$("#footerContainer").css("border-top", "solid white 1px"); 
		});

	// faq ........................................................

		$(".footer.left.faq").click(function(){
			$("#about")  .hide();
			$("#faq")    .show();
			$("#contact").hide();

			$("#infoContainer").slideDown();
			$("#imgContainer").slideUp();			
        	$("#footerContainer").css("border-top", "solid white 1px"); 
		});		

	// contact ........................................................

		$(".footer.left.contact").click(function(){
			$("#about")  .hide();
			$("#faq")    .hide();
			$("#contact").show();

			$("#infoContainer").slideDown();
			$("#imgContainer").slideUp();
        	$("#footerContainer").css("border-top", "solid white 1px");  	
		});


// ---> Love It / Buy It Width & Height ....................................

	
	// get width & height of ".productImage"

	$(window).resize(function() {
		var imgWidth = $(".productWrapper").width();
		var imgHeight = $(".productWrapper").height();
		$(".loveItBuyIt").css({ width: imgWidth, height: imgHeight });
	});


// ---> Image Container ....................................................	

 // document.ready shorthand
 	$(function(){

	// listen for clicks on images
        $('#imgContainer').on('click','img', function(){
            $this = $(this);

        // decide which image is next                
            var dept = $(".active").data("dept");
			var cat  = $(".active").data("category");
            var images  = products[dept][cat][selectImages($this)];
            var imgLink = $this.attr('src');
            var currentImage = images.indexOf(imgLink)
            var nextImage = (currentImage + 1) % images.length;
			$this.attr('src', images[nextImage]);

		 // Select Next Image
        	function selectImages(current){
            	return $('#imgContainer img').index(current);
        }
        	 
        // Insert ".loveItBuyIt"
        	if (!nextImage){

        		var imgWidth = $(".productWrapper").width();
				var imgHeight = $(".productWrapper").height();
				$(".loveItBuyIt").css({ width: imgWidth, height: imgHeight });

        		// $(".loveItBuyIt").show();

        		// var loveItBuyIt = $("<div class="loveItBuyIt"></div>");
				// $this.attr(".engagedProduct").append(loveItBuyIt);
        	}
        })
}) 


// ---> imgLink(s) ........................................................

var products = 

{
 // ---> mens ...........................................................
	mens : 
	{
		jackets :
		[
			[ 
			"images/mens/jackets/jacket1/MightyMacQuiltedARORaceJacketNavyGreen_L1.jpg",
			"images/mens/jackets/jacket1/MightyMacQuiltedARORaceJacketNavyGreen_L2.jpg",
			"images/mens/jackets/jacket1/MightyMacQuiltedARORaceJacketNavyGreen_L3.jpg",
			"images/mens/jackets/jacket1/MightyMacQuiltedARORaceJacketNavyGreen_L4.jpg"
			],[
			"images/mens/jackets/jacket2/MightyMacRaceClothAROSportJacketNavy_L1.jpg",
			"images/mens/jackets/jacket2/MightyMacRaceClothAROSportJacketNavy_L2.jpg",
			"images/mens/jackets/jacket2/MightyMacRaceClothAROSportJacketNavy_L3.jpg",
			"images/mens/jackets/jacket2/MightyMacRaceClothAROSportJacketNavy_L4.jpg"
			],[
			"images/mens/jackets/jacket3/MightyMacQuiltedARORaceJacketNavyYellow_L1.jpg",
			"images/mens/jackets/jacket3/MightyMacQuiltedARORaceJacketNavyYellow_L2.jpg",
			"images/mens/jackets/jacket3/MightyMacQuiltedARORaceJacketNavyYellow_L3.jpg",
			"images/mens/jackets/jacket3/MightyMacQuiltedARORaceJacketNavyYellow_L4.jpg"
			],[
			"images/mens/jackets/jacket4/ArpenteurVillefrancheJacketBlue_L1.jpg",
			"images/mens/jackets/jacket4/ArpenteurVillefrancheJacketBlue_L2.jpg",
			"images/mens/jackets/jacket4/ArpenteurVillefrancheJacketBlue_L3.jpg",
			"images/mens/jackets/jacket4/ArpenteurVillefrancheJacketBlue_L4.jpg"
			],[
			"images/mens/jackets/jacket5/ArpenteurMayenneJacketCotedeCheval_L1.jpg",
			"images/mens/jackets/jacket5/ArpenteurMayenneJacketCotedeCheval_L2.jpg",
			"images/mens/jackets/jacket5/ArpenteurMayenneJacketCotedeCheval_L3.jpg",
			"images/mens/jackets/jacket5/ArpenteurMayenneJacketCotedeCheval_L4.jpg"
			],[
			"images/mens/jackets/jacket6/ArpenteurVillefrancheJacketGreycroise2_L1.jpg",
			"images/mens/jackets/jacket6/ArpenteurVillefrancheJacketGreycroise2_L2.jpg",
			"images/mens/jackets/jacket6/ArpenteurVillefrancheJacketGreycroise2_L3.jpg",
			"images/mens/jackets/jacket6/ArpenteurVillefrancheJacketGreycroise2_L4.jpg"
			],[
			"images/mens/jackets/jacket7/BlueBlueBassenDyedIndgioBlazer_L1.jpg",
			"images/mens/jackets/jacket7/BlueBlueBassenDyedIndgioBlazer_L2.jpg",
			"images/mens/jackets/jacket7/BlueBlueBassenDyedIndgioBlazer_L3.jpg",
			"images/mens/jackets/jacket7/BlueBlueBassenDyedIndgioBlazer_L4.jpg"
			],[
			"images/mens/jackets/jacket8/BlueBlueJapanDyedIndigoKnitBlazerPolkaDot_L1.jpg",
			"images/mens/jackets/jacket8/BlueBlueJapanDyedIndigoKnitBlazerPolkaDot_L2.jpg",
			"images/mens/jackets/jacket8/BlueBlueJapanDyedIndigoKnitBlazerPolkaDot_L3.jpg",
			"images/mens/jackets/jacket8/BlueBlueJapanDyedIndigoKnitBlazerPolkaDot_L4.jpg"
			],[
			"images/mens/jackets/jacket9/GitmanVintageSportJacketZebraStripe_L1.jpg",
			"images/mens/jackets/jacket9/GitmanVintageSportJacketZebraStripe_L2.jpg",
			"images/mens/jackets/jacket9/GitmanVintageSportJacketZebraStripe_L3.jpg",
			"images/mens/jackets/jacket9/GitmanVintageSportJacketZebraStripe_L4.jpg"
			]
		],

		shirts :
		[
			[ 
			"images/mens/shirts/shirt1/BigYankFlannelTypeIShirtGrey_L1.jpg",
			"images/mens/shirts/shirt1/BigYankFlannelTypeIShirtGrey_L2.jpg",
			"images/mens/shirts/shirt1/BigYankFlannelTypeIShirtGrey_L3.jpg",
			"images/mens/shirts/shirt1/BigYankFlannelTypeIShirtGrey_L4.jpg"
			],[
			"images/mens/shirts/shirt2/BlueBlueJapanButtonDownIndigoPolkaDots_L1.jpg",
			"images/mens/shirts/shirt2/BlueBlueJapanButtonDownIndigoPolkaDots_L2.jpg",
			"images/mens/shirts/shirt2/BlueBlueJapanButtonDownIndigoPolkaDots_L3.jpg",
			"images/mens/shirts/shirt2/BlueBlueJapanButtonDownIndigoPolkaDots_L4.jpg"
			],[
			"images/mens/shirts/shirt3/BigYankSaltNPepper1935Shirt_L1.jpg",
			"images/mens/shirts/shirt3/BigYankSaltNPepper1935Shirt_L2.jpg",
			"images/mens/shirts/shirt3/BigYankSaltNPepper1935Shirt_L3.jpg",
			"images/mens/shirts/shirt3/BigYankSaltNPepper1935Shirt_L4.jpg"
			],[
			"images/mens/shirts/shirt4/BlueBlueHandDyedBDShirtIndigo_L1.jpg",
			"images/mens/shirts/shirt4/BlueBlueHandDyedBDShirtIndigo_L2.jpg",
			"images/mens/shirts/shirt4/BlueBlueHandDyedBDShirtIndigo_L3.jpg",
			"images/mens/shirts/shirt4/BlueBlueHandDyedBDShirtIndigo_L4.jpg"
			],[
			"images/mens/shirts/shirt5/ArpenteurGuideShirtCharcoal_L1.jpg",
			"images/mens/shirts/shirt5/ArpenteurGuideShirtCharcoal_L2.jpg",
			"images/mens/shirts/shirt5/ArpenteurGuideShirtCharcoal_L3.jpg",
			"images/mens/shirts/shirt5/ArpenteurGuideShirtCharcoal_L4.jpg"
			],[
			"images/mens/shirts/shirt6/ArpenteurGrandPereShirtWhite_L1.jpg",
			"images/mens/shirts/shirt6/ArpenteurGrandPereShirtWhite_L2.jpg",
			"images/mens/shirts/shirt6/ArpenteurGrandPereShirtWhite_L3.jpg",
			"images/mens/shirts/shirt6/ArpenteurGrandPereShirtWhite_L4.jpg"
			],[
			"images/mens/shirts/shirt7/AKindofGuiseDigitalCamoShirtBlue_L1.jpg",
			"images/mens/shirts/shirt7/AKindofGuiseDigitalCamoShirtBlue_L2.jpg",
			"images/mens/shirts/shirt7/AKindofGuiseDigitalCamoShirtBlue_L3.jpg",
			"images/mens/shirts/shirt7/AKindofGuiseDigitalCamoShirtBlue_L4.jpg"
			],[
			"images/mens/shirts/shirt8/LatreUtilityShirtBlackPurple_L1.jpg",
			"images/mens/shirts/shirt8/LatreUtilityShirtBlackPurple_L2.jpg",
			"images/mens/shirts/shirt8/LatreUtilityShirtBlackPurple_L3.jpg",
			"images/mens/shirts/shirt8/LatreUtilityShirtBlackPurple_L4.jpg"
			],[
			"images/mens/shirts/shirt9/AXSMilitaryCrossCampshirtGreen_L1.jpg",
			"images/mens/shirts/shirt9/AXSMilitaryCrossCampshirtGreen_L2.jpg",
			"images/mens/shirts/shirt9/AXSMilitaryCrossCampshirtGreen_L3.jpg",
			"images/mens/shirts/shirt9/AXSMilitaryCrossCampshirtGreen_L4.jpg"
			]
		],

		pants :
		[
			[ 
			"images/mens/pants/pant1/BurgusPlusMilitaryTrousersIndigoWool_L1.jpg",
			"images/mens/pants/pant1/BurgusPlusMilitaryTrousersIndigoWool_L2.jpg",
			"images/mens/pants/pant1/BurgusPlusMilitaryTrousersIndigoWool_L3.jpg",
			"images/mens/pants/pant1/BurgusPlusMilitaryTrousersIndigoWool_L4.jpg"
			],[
			"images/mens/pants/pant2/BurgusPlusTightStraightCordPantsBlack_L1.jpg",
			"images/mens/pants/pant2/BurgusPlusTightStraightCordPantsBlack_L2.jpg",
			"images/mens/pants/pant2/BurgusPlusTightStraightCordPantsBlack_L3.jpg",
			"images/mens/pants/pant2/BurgusPlusTightStraightCordPantsBlack_L4.jpg"
			],[
			"images/mens/pants/pant3/BurgusPlusMilitaryTrousersOlive_L1.jpg",
			"images/mens/pants/pant3/BurgusPlusMilitaryTrousersOlive_L2.jpg",
			"images/mens/pants/pant3/BurgusPlusMilitaryTrousersOlive_L3.jpg",
			"images/mens/pants/pant3/BurgusPlusMilitaryTrousersOlive_L4.jpg"
			],[
			"images/mens/pants/pant4/LeftFieldCoalMinerChinoCaramelDuck_L1.jpg",
			"images/mens/pants/pant4/LeftFieldCoalMinerChinoCaramelDuck_L2.jpg",
			"images/mens/pants/pant4/LeftFieldCoalMinerChinoCaramelDuck_L3.jpg",
			"images/mens/pants/pant4/LeftFieldCoalMinerChinoCaramelDuck_L4.jpg"
			],[
			"images/mens/pants/pant5/LeftFieldCoalMinerChinoSteelDuck_L1.jpg",
			"images/mens/pants/pant5/LeftFieldCoalMinerChinoSteelDuck_L2.jpg",
			"images/mens/pants/pant5/LeftFieldCoalMinerChinoSteelDuck_L3.jpg",
			"images/mens/pants/pant5/LeftFieldCoalMinerChinoSteelDuck_L4.jpg"
			],[
			"images/mens/pants/pant6/LeftFieldCoalMinerChinoOliveDuck_L1.jpg",
			"images/mens/pants/pant6/LeftFieldCoalMinerChinoOliveDuck_L2.jpg",
			"images/mens/pants/pant6/LeftFieldCoalMinerChinoOliveDuck_L3.jpg",
			"images/mens/pants/pant6/LeftFieldCoalMinerChinoOliveDuck_L4.jpg"
			],[
			"images/mens/pants/pant7/TheHillSideChinosBlack1_L1.jpg",
			"images/mens/pants/pant7/TheHillSideChinosBlack1_L2.jpg",
			"images/mens/pants/pant7/TheHillSideChinosBlack1_L3.jpg",
			"images/mens/pants/pant7/TheHillSideChinosBlack1_L4.jpg"
			],[
			"images/mens/pants/pant8/TheHillSideChinosGreen1_L1.jpg",
			"images/mens/pants/pant8/TheHillSideChinosGreen1_L2.jpg",
			"images/mens/pants/pant8/TheHillSideChinosGreen1_L3.jpg",
			"images/mens/pants/pant8/TheHillSideChinosGreen1_L4.jpg"
			],[
			"images/mens/pants/pant9/TheHillSideChinosNavy1_L1.jpg",
			"images/mens/pants/pant9/TheHillSideChinosNavy1_L2.jpg",
			"images/mens/pants/pant9/TheHillSideChinosNavy1_L3.jpg",
			"images/mens/pants/pant9/TheHillSideChinosNavy1_L4.jpg"
			]
		]
	},

 // ---> wommens ...........................................................
	womens : 
	{
		sweaters :
		[
			[ 
			"images/womens/sweaters/sweater1/09326_MS0457_m.jpg",
			"images/womens/sweaters/sweater1/09326_MS0457_s.jpg",
			"images/womens/sweaters/sweater1/09326_MS0457_b.jpg"
			],[
			"images/womens/sweaters/sweater2/07856_KP1173_m.jpg",
			"images/womens/sweaters/sweater2/07856_KP1173_s.jpg",
			"images/womens/sweaters/sweater2/07856_KP1173_b.jpg"
			],[
			"images/womens/sweaters/sweater3/09313_KP5708_m.jpg",
			"images/womens/sweaters/sweater3/09313_KP5708_s.jpg",
			"images/womens/sweaters/sweater3/09313_KP5708_b.jpg"
			],[
			"images/womens/sweaters/sweater4/08810_GY6577_m.jpg",
			"images/womens/sweaters/sweater4/08810_GY6577_s.jpg",
			"images/womens/sweaters/sweater4/08810_GY6577_b.jpg"
			],[
			"images/womens/sweaters/sweater5/08426_KP1565_m.jpg",
			"images/womens/sweaters/sweater5/08426_KP1565_s.jpg",
			"images/womens/sweaters/sweater5/08426_KP1565_b.jpg"
			],[
			"images/womens/sweaters/sweater6/09136_KP9669_m.jpg",
			"images/womens/sweaters/sweater6/09136_KP9669_s.jpg",
			"images/womens/sweaters/sweater6/09136_KP9669_b.jpg"
			],[
			"images/womens/sweaters/sweater7/09161_KP1291_m.jpg",
			"images/womens/sweaters/sweater7/09161_KP1291_s.jpg",
			"images/womens/sweaters/sweater7/09161_KP1291_b.jpg"
			],[
			"images/womens/sweaters/sweater8/08155_KP0509_m.jpg",
			"images/womens/sweaters/sweater8/08155_KP0509_s.jpg",
			"images/womens/sweaters/sweater8/08155_KP0509_b.jpg"
			],[
			"images/womens/sweaters/sweater9/07862_KP1514_m.jpg",
			"images/womens/sweaters/sweater9/07862_KP1514_s.jpg",
			"images/womens/sweaters/sweater9/07862_KP1514_b.jpg"
			]
		],

		dresses :
		[
			[ 
			"images/womens/dresses/dress1/06846_KP0630_m.jpg",
			"images/womens/dresses/dress1/06846_KP0630_s.jpg",
			"images/womens/dresses/dress1/06846_KP0630_b.jpg"
			],[
			"images/womens/dresses/dress2/03344_BK0001_m.jpg",
			"images/womens/dresses/dress2/03344_BK0001_s.jpg",
			"images/womens/dresses/dress2/03344_BK0001_b.jpg"
			],[
			"images/womens/dresses/dress3/25087_BK0001_m.jpg",
			"images/womens/dresses/dress3/25087_BK0001_s.jpg",
			"images/womens/dresses/dress3/25087_BK0001_b.jpg"
			],[
			"images/womens/dresses/dress4/66737_GY6529_m.jpg",
			"images/womens/dresses/dress4/66737_GY6529_s.jpg",
			"images/womens/dresses/dress4/66737_GY6529_b.jpg"
			],[
			"images/womens/dresses/dress5/93100_GR7032_m.jpg",
			"images/womens/dresses/dress5/93100_GR7032_s.jpg",
			"images/womens/dresses/dress5/93100_GR7032_b.jpg"
			],[
			"images/womens/dresses/dress6/29286_OR5230_m.jpg",
			"images/womens/dresses/dress6/29286_OR5230_s.jpg",
			"images/womens/dresses/dress6/29286_OR5230_b.jpg"
			],[
			"images/womens/dresses/dress7/07869_WO1140_m.jpg",
			"images/womens/dresses/dress7/07869_WO1140_s.jpg",
			"images/womens/dresses/dress7/07869_WO1140_b.jpg"
			],[
			"images/womens/dresses/dress8/02991_NA6129_m.jpg",
			"images/womens/dresses/dress8/02991_NA6129_s.jpg",
			"images/womens/dresses/dress8/02991_NA6129_b.jpg"
			],[
			"images/womens/dresses/dress9/07078_RD5689_m.jpg",
			"images/womens/dresses/dress9/07078_RD5689_s.jpg",
			"images/womens/dresses/dress9/07078_RD5689_b.jpg"
			]
		],

		pants :
		[
			[ 
			"images/womens/pants/pant1/09616_GR1705_m.jpg",
			"images/womens/pants/pant1/09616_GR1705_s.jpg",
			"images/womens/pants/pant1/09616_GR1705_b.jpg"
			],[
			"images/womens/pants/pant2/04257_BL7318_m.jpg",
			"images/womens/pants/pant2/04257_BL7318_s.jpg",
			"images/womens/pants/pant2/04257_BL7318_b.jpg"
			],[
			"images/womens/pants/pant3/95852_BL8133_m.jpg",
			"images/womens/pants/pant3/95852_BL8133_s.jpg",
			"images/womens/pants/pant3/95852_BL8133_b.jpg"
			],[
			"images/womens/pants/pant4/07903_WO1694_m.jpg",
			"images/womens/pants/pant4/07903_WO1694_s.jpg",
			"images/womens/pants/pant4/07903_WO1694_b.jpg"
			],[
			"images/womens/pants/pant5/93034_GY6397_m.jpg",
			"images/womens/pants/pant5/93034_GY6397_s.jpg",
			"images/womens/pants/pant5/93034_GY6397_b.jpg"
			],[
			"images/womens/pants/pant6/18850_BL8133_m.jpg",
			"images/womens/pants/pant6/18850_BL8133_s.jpg",
			"images/womens/pants/pant6/18850_BL8133_b.jpg"
			],[
			"images/womens/pants/pant7/03704_BK0001_m.jpg",
			"images/womens/pants/pant7/03704_BK0001_s.jpg",
			"images/womens/pants/pant7/03704_BK0001_b.jpg"
			],[
			"images/womens/pants/pant8/08806_NA7261_m.jpg",
			"images/womens/pants/pant8/08806_NA7261_s.jpg",
			"images/womens/pants/pant8/08806_NA7261_b.jpg"
			],[
			"images/womens/pants/pant9/03341_PR5851_m.jpg",
			"images/womens/pants/pant9/03341_PR5851_s.jpg",
			"images/womens/pants/pant9/03341_PR5851_b.jpg"
			]
		]
	},	


 // ---> accessories .......................................................
	accessories : 
	{

		bags : 
		[
			[ 
			"images/accessories/bags/bag1/StanleySonsMechanicPouchBurgundy_L1.jpg",
			"images/accessories/bags/bag1/StanleySonsMechanicPouchBurgundy_L2.jpg",
			"images/accessories/bags/bag1/StanleySonsMechanicPouchBurgundy_L3.jpg"
			],[
			"images/accessories/bags/bag2/StanleySonsMechanicPouchCinnamon_L1.jpg",
			"images/accessories/bags/bag2/StanleySonsMechanicPouchCinnamon_L2.jpg",
			"images/accessories/bags/bag2/StanleySonsMechanicPouchCinnamon_L3.jpg"
			],[
			"images/accessories/bags/bag3/StanleySonsMechanicPouchOliveDrab_L1.jpg",
			"images/accessories/bags/bag3/StanleySonsMechanicPouchOliveDrab_L2.jpg",
			"images/accessories/bags/bag3/StanleySonsMechanicPouchOliveDrab_L3.jpg"
			],[
			"images/accessories/bags/bag4/StanleySonsDrawstringPouchBurgundy_L1.jpg",
			"images/accessories/bags/bag4/StanleySonsDrawstringPouchBurgundy_L2.jpg",
			"images/accessories/bags/bag4/StanleySonsDrawstringPouchBurgundy_L4.jpg",
			"images/accessories/bags/bag4/StanleySonsDrawstringPouchBurgundy_L5.jpg"
			],[
			"images/accessories/bags/bag5/StanleySonsDrawstringPouchCinnamon_L1.jpg",
			"images/accessories/bags/bag5/StanleySonsDrawstringPouchCinnamon_L2.jpg",
			"images/accessories/bags/bag5/StanleySonsDrawstringPouchCinnamon_L3.jpg",
			"images/accessories/bags/bag5/StanleySonsDrawstringPouchCinnamon_L4.jpg"
			],[
			"images/accessories/bags/bag6/StanleySonsDrawstringPouchOliveDrab_L1.jpg",
			"images/accessories/bags/bag6/StanleySonsDrawstringPouchOliveDrab_L2.jpg",
			"images/accessories/bags/bag6/StanleySonsDrawstringPouchOliveDrab_L4.jpg",
			"images/accessories/bags/bag6/StanleySonsDrawstringPouchOliveDrab_L5.jpg"
			],[
			"images/accessories/bags/bag7/TheHill-SideDrifterZipPouchCherryBlossomGreen_L1.jpg",
			"images/accessories/bags/bag7/TheHill-SideDrifterZipPouchCherryBlossomGreen_L2.jpg",
			"images/accessories/bags/bag7/TheHill-SideDrifterZipPouchCherryBlossomGreen_L3.jpg",
			"images/accessories/bags/bag7/TheHill-SideDrifterZipPouchCherryBlossomGreen_L4.jpg"
			],[
			"images/accessories/bags/bag8/TheHill-SideDrifterZipPouchTigerCamo_L1.jpg",
			"images/accessories/bags/bag8/TheHill-SideDrifterZipPouchTigerCamo_L2.jpg",
			"images/accessories/bags/bag8/TheHill-SideDrifterZipPouchTigerCamo_L3.jpg",
			"images/accessories/bags/bag8/TheHill-SideDrifterZipPouchTigerCamo_L4.jpg"
			],[
			"images/accessories/bags/bag9/TheHill-SideDrifterZipPouchHickoryStripe_L1.jpg",
			"images/accessories/bags/bag9/TheHill-SideDrifterZipPouchHickoryStripe_L2.jpg",
			"images/accessories/bags/bag9/TheHill-SideDrifterZipPouchHickoryStripe_L3.jpg",
			"images/accessories/bags/bag9/TheHill-SideDrifterZipPouchHickoryStripe_L4.jpg"
			]
		],

		shoes : 
		[
			[ 
			"images/accessories/shoes/shoe1/TretornNyliteCanvasDoveSaphire_L1.jpg",
			"images/accessories/shoes/shoe1/TretornNyliteCanvasDoveSaphire_L2.jpg",
			"images/accessories/shoes/shoe1/TretornNyliteCanvasDoveSaphire_L3.jpg"
			],[
			"images/accessories/shoes/shoe2/TretornNyliteWhiteWhite_L1.jpg",
			"images/accessories/shoes/shoe2/TretornNyliteWhiteWhite_L2.jpg",
			"images/accessories/shoes/shoe2/TretornNyliteWhiteWhite_L3.jpg"
			],[
			"images/accessories/shoes/shoe3/TretornNyliteWhiteNavy_L1.jpg",
			"images/accessories/shoes/shoe3/TretornNyliteWhiteNavy_L2.jpg",
			"images/accessories/shoes/shoe3/TretornNyliteWhiteNavy_L3.jpg"
			],[
			"images/accessories/shoes/shoe4/TheHillSideBYUASneakers3dCheveron_L1.jpg",
			"images/accessories/shoes/shoe4/TheHillSideBYUASneakers3dCheveron_L2.jpg",
			"images/accessories/shoes/shoe4/TheHillSideBYUASneakers3dCheveron_L3.jpg",
			"images/accessories/shoes/shoe4/TheHillSideBYUASneakers3dCheveron_L4.jpg"
			],[
			"images/accessories/shoes/shoe5/TheHillSideBYUASneakersBurgundyFloral_L1.jpg",
			"images/accessories/shoes/shoe5/TheHillSideBYUASneakersBurgundyFloral_L2.jpg",
			"images/accessories/shoes/shoe5/TheHillSideBYUASneakersBurgundyFloral_L3.jpg",
			"images/accessories/shoes/shoe5/TheHillSideBYUASneakersBurgundyFloral_L4.jpg"
			],[
			"images/accessories/shoes/shoe6/TheHillSideBYUASneakersBullseyeDotShweShwe_L1.jpg",
			"images/accessories/shoes/shoe6/TheHillSideBYUASneakersBullseyeDotShweShwe_L2.jpg",
			"images/accessories/shoes/shoe6/TheHillSideBYUASneakersBullseyeDotShweShwe_L3.jpg",
			"images/accessories/shoes/shoe6/TheHillSideBYUASneakersBullseyeDotShweShwe_L4.jpg"
			],[
			"images/accessories/shoes/shoe7/TheHillSideBYUASneakersNavyFloralLinen_L1.jpg",
			"images/accessories/shoes/shoe7/TheHillSideBYUASneakersNavyFloralLinen_L2.jpg",
			"images/accessories/shoes/shoe7/TheHillSideBYUASneakersNavyFloralLinen_L3.jpg",
			"images/accessories/shoes/shoe7/TheHillSideBYUASneakersNavyFloralLinen_L4.jpg"
			],[
			"images/accessories/shoes/shoe8/ShoesLikePotteryLowSneakersWhiteCanvas_L1.jpg",
			"images/accessories/shoes/shoe8/ShoesLikePotteryLowSneakersWhiteCanvas_L2.jpg",
			"images/accessories/shoes/shoe8/ShoesLikePotteryLowSneakersWhiteCanvas_L3.jpg",
			"images/accessories/shoes/shoe8/ShoesLikePotteryLowSneakersWhiteCanvas_L4.jpg"
			],[
			"images/accessories/shoes/shoe9/ShoesLikePotteryLowSneakersBlackCanvas_L1.jpg",
			"images/accessories/shoes/shoe9/ShoesLikePotteryLowSneakersBlackCanvas_L2.jpg",
			"images/accessories/shoes/shoe9/ShoesLikePotteryLowSneakersBlackCanvas_L3.jpg",
			"images/accessories/shoes/shoe9/ShoesLikePotteryLowSneakersBlackCanvas_L4.jpg"
			]
		],

		bandanas : 
		[
			[ 
			"images/accessories/bandanas/bandana1/JSHomesteadIndigoDyedBandana_L1.jpg",
			"images/accessories/bandanas/bandana1/JSHomesteadIndigoDyedBandana_L2.jpg",
			"images/accessories/bandanas/bandana1/JSHomesteadIndigoDyedBandana_L3.jpg",
			"images/accessories/bandanas/bandana1/JSHomesteadIndigoDyedBandana_L4.jpg"
			],[
			"images/accessories/bandanas/bandana2/StanleySonsPatternBandanaBlack_L1.jpg",
			"images/accessories/bandanas/bandana2/StanleySonsPatternBandanaBlack_L2.jpg",
			"images/accessories/bandanas/bandana2/StanleySonsPatternBandanaBlack_L3.jpg",
			"images/accessories/bandanas/bandana2/StanleySonsPatternBandanaBlack_L4.jpg"
			],[
			"images/accessories/bandanas/bandana3/JSHomesteadBlackSulfurDyedBandana_L1.jpg",
			"images/accessories/bandanas/bandana3/JSHomesteadBlackSulfurDyedBandana_L2.jpg",
			"images/accessories/bandanas/bandana3/JSHomesteadBlackSulfurDyedBandana_L3.jpg",
			"images/accessories/bandanas/bandana3/JSHomesteadBlackSulfurDyedBandana_L4.jpg"
			],[
			"images/accessories/bandanas/bandana4/StanleySonsBandanaOlive_L1.jpg",
			"images/accessories/bandanas/bandana4/StanleySonsBandanaOlive_L2.jpg",
			"images/accessories/bandanas/bandana4/StanleySonsBandanaOlive_L3.jpg",
			"images/accessories/bandanas/bandana4/StanleySonsBandanaOlive_L4.jpg"
			],[
			"images/accessories/bandanas/bandana5/StanleySonsBandanaNavy_L1.jpg",
			"images/accessories/bandanas/bandana5/StanleySonsBandanaNavy_L2.jpg",
			"images/accessories/bandanas/bandana5/StanleySonsBandanaNavy_L3.jpg",
			"images/accessories/bandanas/bandana5/StanleySonsBandanaNavy_L4.jpg"
			],[
			"images/accessories/bandanas/bandana6/StanleySonsBandanaCinnamon_L1.jpg",
			"images/accessories/bandanas/bandana6/StanleySonsBandanaCinnamon_L2.jpg",
			"images/accessories/bandanas/bandana6/StanleySonsBandanaCinnamon_L3.jpg",
			"images/accessories/bandanas/bandana6/StanleySonsBandanaCinnamon_L4.jpg"
			],[
			"images/accessories/bandanas/bandana7/MadeontheMoonGizaBandanaBlack_L1.jpg",
			"images/accessories/bandanas/bandana7/MadeontheMoonGizaBandanaBlack_L2.jpg",
			"images/accessories/bandanas/bandana7/MadeontheMoonGizaBandanaBlack_L3.jpg",
			"images/accessories/bandanas/bandana7/MadeontheMoonGizaBandanaBlack_L4.jpg"
			],[
			"images/accessories/bandanas/bandana8/MadeontheMoonGizaBandanaRed_L1.jpg",
			"images/accessories/bandanas/bandana8/MadeontheMoonGizaBandanaRed_L2.jpg",
			"images/accessories/bandanas/bandana8/MadeontheMoonGizaBandanaRed_L3.jpg",
			"images/accessories/bandanas/bandana8/MadeontheMoonGizaBandanaRed_L4.jpg"
			],[
			"images/accessories/bandanas/bandana9/MadeontheMoonGizaBandanaNavy_L1.jpg",
			"images/accessories/bandanas/bandana9/MadeontheMoonGizaBandanaNavy_L2.jpg",
			"images/accessories/bandanas/bandana9/MadeontheMoonGizaBandanaNavy_L3.jpg",
			"images/accessories/bandanas/bandana9/MadeontheMoonGizaBandanaNavy_L4.jpg"
			]
		]
	}, 

 // ---> end .......................................................
};	
				
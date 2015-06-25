var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var view = require("ui/core/view");
var application = require("application");
var mapViewInstance;

var MapView = (function (_super) {
    __extends(MapView, _super);
    function MapView() {
        _super.apply(this, arguments);
        console.log("gMapsPlugin:constructor");

        this.on("loaded", this.onLoaded);
    }

    MapView.prototype.onLoaded = function (args)
    {
        console.log("gMapsPlugin:onLoaded");

        var that = this;
        // TODO expose these as events, create issue.
        application.android.onActivityDestroyed = function (activity)
        {
            console.log("gMapsPlugin:onActivityDestroyed");
            that.android.onDestroy();
        }

        application.android.onActivityPaused = function (activity)
        {
            console.log("gMapsPlugin:onActivityPaused");
           that.android.onPause();
        }

        application.android.onActivityResumed = function (activity)
        {
            console.log("gMapsPlugin:onActivityResumed");
           that.android.onResume();
        }

        application.android.onActivitySaveInstanceState = function (activity, bundle)
        {
            console.log("gMapsPlugin:onActivitySaveInstanceState");
            that.android.onSaveInstanceState(bundle);
        }
    }

    Object.defineProperty(MapView.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    MapView.prototype._createUI = function () {
        console.log("gMapsPlugin:_createUI");

        var that = new WeakRef(this);

        var activity = this._context;
        this._android = new com.google.android.gms.maps.MapView(activity);
        this._android.onCreate(null);

        var callbacks = new com.google.android.gms.maps.OnMapReadyCallback({
            onMapReady: function (gMap) {

                console.log("gMapsPlugin:onMapReady:GoogleMap=" + gMap);                            
                var latlng = new com.google.android.gms.maps.model.LatLng(-33.86, 151.20);

                gMap.setMyLocationEnabled(true);
                console.log("gMapsPlugin:onMapReady:LocationENabled");

                gMap.moveCamera(com.google.android.gms.maps.CameraUpdateFactory.newLatLngZoom(latlng, 13));
                console.log("gMapsPlugin:onMapReady:CameraMoved");       

                markerOptions = new com.google.android.gms.maps.model.MarkerOptions();
                markerOptions.title("Sydney");
                markerOptions.snippet("Australia");
                
                markerOptions.position(latlng);
                console.log("gMapsPlugin:onMapReady:SettingMarker");

                gMap.addMarker(markerOptions);
                console.log("gMapsPlugin:onMapReady:MarkerSet");
            }
        });

        console.log("gMapsPlugin:getMapAsync");
        this._android.getMapAsync(callbacks);

        /*this._android.setOnClickListener(new android.view.View.OnClickListener({
            get owner() {
                return that.get();
            },
            onClick: function (v) {
                if (this.owner) {
                    this.owner._emit(common.Button.tapEvent);
                }
            }
        }));*/
    };

    return MapView;
})(view.View);
exports.MapView = MapView;

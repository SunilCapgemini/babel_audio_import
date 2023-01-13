import BandwidthUtills from "./bw_utils";
class BandwidthUA extends BandwidthUtills {
  #audioCodeSdk;

  async version() {
    this.#audioCodeSdk = await this.audioCodeSDK;
    const bandwidthUA = new this.#audioCodeSdk.AudioCodesUA();
    console.log(bandwidthUA.version());
  }
}
export default BandwidthUA;
console.log(window);

// let bw_UA = new BandwidthUA();
// bw_UA.version();

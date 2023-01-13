class BandwidthUtills {
  #externalJSUrl = "./src/ac_webrtc.min.js";
  constructor() {
    this.audioCodeSDK = this.loadExternalScript();
  }
  async loadExternalScript() {
    try {
      const externalJSFile = await fetch(this.#externalJSUrl);
      const jsFileResponse = await externalJSFile.text();
      let returnScriptResults = new Function(
        `${jsFileResponse} return {AudioCodesUA,AudioCodesSession}`
      );
      return returnScriptResults();
    } catch (e) {
      console.error("Error loading script:", e);
    }
  }
}
export default BandwidthUtills;

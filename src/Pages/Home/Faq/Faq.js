import React from "react";
import faq from "../../../images/faq.jpg";

const Faq = () => {
  return (
    <section>
      <p className="text-4xl mt-[145px] mb-16 lg:mb-10">FAQs</p>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center items-center mx-12 mb-[120px]">
        <div className="flex-1 text-left">
          <div
            tabindex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div class="collapse-title text-xl font-medium">
              What is your minimum order quantity (MOQ)?
            </div>
            <div class="collapse-content">
              <p>
                Production minimums are 300 pieces in NYC and 500 pieces for
                overseas production, depending on the garment. Smaller styles
                such as boxers, briefs, sports bras, and other undergarments
                require a 500 minimum – socks require 500 pairs, (1000
                individual pieces).
              </p>
            </div>
          </div>
          <div
            tabindex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div class="collapse-title text-xl font-medium">
              Do I need a tech-pack?
            </div>
            <div class="collapse-content">
              <p>
                No, you do not need a tech-pack to get started. You can provide
                the measurements of your fit model, or provide samples of
                similar garments with the fit you like. We can also schedule an
                appointment to take the measurements of you, a friend, or your
                fit model to create a spec-sheet.
              </p>
            </div>
          </div>
          <div
            tabindex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div class="collapse-title text-xl font-medium">
              Can I order a sample before ordering?
            </div>
            <div class="collapse-content">
              <p>
                The cost of production is dependent on many variables including
                fabric weight, consumption, quantity, and construction of the
                garment. We cannot provide a blanket cost estimate for any
                garment without specific garment details or viewing the
                construction and fabric. Please refer to our Request a Quote
                form and provide the required details to receive a fair cost
                estimate.
              </p>
            </div>
          </div>
          <div
            tabindex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div class="collapse-title text-xl font-medium">
              What is included in full production packages?
            </div>
            <div class="collapse-content">
              <p>
                Our team of designers, and pattern makers assist with initial
                garment development to create your spec-sheet, 1st pattern, and
                pre-production sample. Included in the full production package
                is: 1st pattern, cut & sew sample, fittings, grading, marking,
                pattern corrections, fabric sourcing, production, cost of fabric
                and trim, freight, duty and tariffs if produced overseas.
              </p>
            </div>
          </div>
          <div
            tabindex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div class="collapse-title text-xl font-medium">
              How long does it typically take to complete an order?
            </div>
            <div class="collapse-content">
              <p>
                Order turnaround is impossible to precisely estimate without the
                details of a given project: turnaround times can depend on the
                services rendered and the complexity of the order. The average
                turnaround to develop your first sample is about 5 – 10 days
                after we’ve received your fabric, and depending on the number of
                corrections. Upon production, after our tables are set and
                fabrics are marked and cut, it’s about 2 – 3 weeks of production
                time. This does not include the estimated shipping time for your
                order. Shipments from China are 30 days by boat.
              </p>
            </div>
          </div>
          <div
            tabindex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div class="collapse-title text-xl font-medium">
              Can you do rush orders?
            </div>
            <div class="collapse-content">
              <p>
                Yes, there is a rush fee applied to your purchase order for all
                rushed items. Please note: non-negotiable rush fees, calculated
                by the day, accompany all rush orders.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img src={faq} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Faq;
